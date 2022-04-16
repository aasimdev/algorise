import React from 'react'
import { Container, Image } from 'react-bootstrap'
import usaFlag from '../../../assets/img/usa.png'
import franceFlag from '../../../assets/img/france.png'
import indonesiaFlag from '../../../assets/img/indonesia.png'
import japanseFlag from '../../../assets/img/japan.png'
import philippineFlag from '../../../assets/img/philippines.png'
import russiaFlag from '../../../assets/img/russia.png'
import tamilFlag from '../../../assets/img/tamil.png'
import vietnamFlag from '../../../assets/img/vietnamese.png'
import mandarinFlag from '../../../assets/img/mandarin.png'
import italianFlag from '../../../assets/img/italian.png'
import persianFlag from '../../../assets/img/persian.png'
import portugueseFlag from '../../../assets/img/portuguese.png'
import spanishFlag from '../../../assets/img/spanish.png'

import Deck from './Deck'

const PromotionDecks = () => {
    return (
        <section className='promotion'>
            <Container>
                <div className='promotion__wrap'>
                    <div className='promotion__content'>
                        <h2>Decks</h2>
                        <p>Full guide and detailed explanation of Algorise and the programs in easy-to-share presentations available in many world languages</p>
                    </div>
                    <div className='promotion__videos'>
                            <Deck title="Algorise Presentation English.PDF" flag={usaFlag}  />
                            <Deck title="Algorise Presentation English.pptx" flag={usaFlag}  />
                            <Deck title="Algorise Presentation French.PDF" flag={franceFlag}  />
                            <Deck title="Algorise Presentation Indonesian.PDF" flag={indonesiaFlag}  />
                            <Deck title="Algorise Presentation Japanese.PDF" flag={japanseFlag}  />
                            <Deck title="Algorise Presentation Philippines.PDF" flag={philippineFlag}  />
                            <Deck title="Algorise Presentation Russian.PDF" flag={russiaFlag}  />
                            <Deck title="Algorise Presentation Tamil.PDF" flag={tamilFlag}  />
                            <Deck title="Algorise Presentation Vietnamese.PDF" flag={vietnamFlag}  />
                            <Deck title="Algorise Presentation Mandarin.PDF" flag={mandarinFlag}  />
                            <Deck title="Algorise Presentation Hindi.PDF" flag={tamilFlag}  />
                            <Deck title="Algorise Presentation Italian.PDF" flag={italianFlag}  />
                            <Deck title="Algorise Presentation Persian.PDF" flag={persianFlag}  />
                            <Deck title="Algorise Presentation Portuguese.PDF" flag={portugueseFlag}  />
                            <Deck title="Algorise Presentation Spanish.PDF" flag={usaFlag}  />
                            <Deck title="Algorise Presentation Telugu.PDF" flag={spanishFlag}  />

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PromotionDecks