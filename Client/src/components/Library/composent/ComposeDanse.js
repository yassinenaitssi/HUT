import React from 'react'
import styles from './composent.styles'
import {connect} from 'react-redux'
@connect(store => {
  return {
    Videos: store.artistFetched.artist
  }
})

export default class News extends React.Component {
  render () {
    return (<div className='host'>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <div className= 'videos'>
        <div>
          <div className='videos-title'><h2>Qu'est ce que c'est compose & danse</h2></div>
          <div className='textBody'> Sarah Belouezzane : Bonjour, pour l’entreprise la rupture conventionnelle est plus sûre juridiquement qu’un plan de sauvegarde de l’emploi qui, lui, repose principalement sur la jurisprudence. Il est beaucoup plus difficile de contester la première que le second et elle ne s’accompagne pas des mêmes obligations de reclassement et de formation que le PSE.

          Maestro : Les ruptures conventionnelles sont-elles aussi protectrices pour les salariés qu’un plan de sauvegarde de l’emploi ?

          S.B. : Elles peuvent être plus avantageuses financièrement mais pas plus protectrices. Plus difficiles à contester que le PSE, elles ont, par ailleurs, le défaut de priver la personne du CSP, le contrat de sécurisation professionnelle. Ce dispositif permet un suivi plus intensif des demandeurs d’emploi victimes d’un licenciement économique et leur assure, pendant un an, une indemnité plus importante que celle de base.

          Yolo : Mais les ruptures conventionnelles collectives ne seraient-elles pas un bon moyen de faire des plans sociaux déguisés ?

          S.B : Le gouvernement a normalement prévu des garde-fous : il faut, pour signer une RCC, la signature des syndicats représentant plus de 50 % des salariés. Il faut par ailleurs obtenir l’accord des services déconcentrés du ministère du travail pour chaque projet de RCC. Cela dit, les syndicats craignent que le système ne soit dévoyé. Pour eux, des employeurs mal intentionnés pourraient recourir à des pressions pour faire signer ce type de plans par les syndicats et éviter le plan social, plus contraignant.
          En savoir plus sur http://www.lemonde.fr/politique/article/2018/01/09/le-salarie-n-aura-pas-droit-au-contrat-de-securisation-qui-permet-un-suivi-plus-intensif_5239300_823448.html#3DoLHM7QHHjCPIlL.99 </div>
        </div>
      </div>

      <style jsx>{styles}</style>
    </div>

    )
  }
}