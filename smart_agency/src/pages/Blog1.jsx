import React from 'react'
import Slika1 from '../assets/blog1.png'
import Slika2 from '../assets/blog1/pic1.png'
import Slika3 from '../assets/blog1/pic2.png'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog1 = () => {
  return (
    <div>
    <SpecialNavbar/>
    <div className='content_blogsStyle'>
        <h1>Ko su Scrum masteri i kako oni zaradjuju vise od 1.800 evra u Srbiji?</h1>
        <h3 className='dateBlog'>18. May 2023.</h3>
        <img src={Slika1} />
        <p>Iako su Scrum masteri sve traženiji, kako u svetu, tako i u Srbiji, za ovo zanimanje još mnogi nisu čuli. Ono se ne izučava ni u školama ni na fakultetima, uprkos činjenici da je potražnja na tržištu rada za tom pozicijom sve veća, a da zarađuju više od 1.800 evra u našoj zemlji.</p>
        <p>Kada se, kako se to moderno kaže, sve ubrzalo, velike kompanije su počele da primećuju da ih dotadašnji način rada, usporava, i da gube konkurentnost na tržištu. Tada su počele da se okreću drugačijim modelima rada, pre svega agilnom poslovanju koje je i izrodilo Scrum kao način rada, okvir koji iako zvuči komplikovano, daje neverovatne rezultate.</p>
        <p>Scrum je nastao u softverskoj industriji, ali se zahvaljujući svojoj primenjivosti proširio i na mnoge druge. Danas Scrum koristi i američki FBI, a primenjuje se i u HR-u, marketingu, zdravstvu, ugostiteljstvu, aviosaobraćaju, računovodstvu, finansijama itd.</p>
        <p>Kod nas se Scrum još uvek vezuje uglavnom za IT industriju. Pozicija Scrum mastera pružila je mogućnost svima onima koji nisu programeri, a žele da rade u IT-ju, kao jednoj od najplaćenijih i najbrže rastućih industrija, da to na ovaj način ostvare - kaže Milica Vojtek iz Smart Consulting Agencije koja se bavi agilnim transformacijama, vođenjem projekata i edukovanjem Scrum mastera i otkriva kako se postaje Scrum master.</p>
        <img src={Slika2} />
        <p>Scrum master možete da postanete za jednu sekundu. Dovoljno je da se tako deklarišete. Ipak, da biste postali dobar Scrum master potrebne su određene edukacije. Naši treneri imaju decenijsko iskustvo u agilnim trnasformacijama i trude se da kroz praktičan pristup nauče polaznike kako da budu što bolji u ovom poslu - navodi Milica za Infostud.</p>
        <p>Nemanja Lukić, student na FON-u, već više od godinu dana radi kao Scrum master i za sada planira da se njegova karijera razvija u tom smeru.</p>
        <p>Sa Scrumom sam se upoznao slučajno, tako što sam dobio praksu u firmi koja je radila po Scrum-u i to me je zainteresovalo. Počeo sam da učim, završio sam kurs za Scrum mastera i nakon toga dobio svoj prvi posao. Mogu da kažem da s obzirom na to da se kroz formalno školovanje ova oblast nedovoljno pominje, za početak je neophodan neki vid dodatne edukacije, ali kasnije je sve stvar iskustva i prakse.</p>
        <p>Šta zapravo rade Scrum masteri?<br/><br/>

Kako to obično biva, nove pojmove teško je objasniti korišćenjem starih, pa to nije zaobišlo ni pojmove Scruma i Scrum mastera.</p>
        <p>Scrum master je definisan kroz Scrum Framework, koji kaže da jedan Scrum tim čine Product Owner, razvojni tim i Scrum master. Uloga Scrum mastera jeste da Scrum tim ”živi” Scrum vrednosti i principe i da se potrudi da njegov tim radi uspešno u tom okviru. U praksi, on je tu da pomaže timu u radu, da balansira između razvojnog tima i predstavnika biznisa, ali i da se bavi Scrumom na nivou cele organizacije.<br/><br/>

Ceo koncept Agilnog poslovanja i Scruma došao je “sa zapada” i počeo veoma brzo da se širi. Razlog tome je bio što su kompanije uvidele da moraju da se ubrzaju, i da je to moguće jedino promenom celokupnog načina rada, ukoliko žele da ostanu konkurentne na tržištu.</p>
        <p>Bojan Smuđa, agilni kouč, koji već godinama radi na edukovanju zaposlenih u velikim kompanijama i njihovim transfrmacijama iz tradicionalnih u agilne, a pre svega učeći ih Scrumu, ističe da su promene često na početku teške, ali da kada se upustite u njih, vrlo brzo uočavate boljitak.</p>
        <img src={Slika3} />
        <p>Kompanije u Srbiji još uvek biraju Scrum zato što je “in”. Ne treba se plašiti da uplovite u agilne vode nespremni, to je kao da skačete u bazen sa hladnom vodom, uskočite, bude vam hladno jednu sekundu i nastavite da plivate. U osnovi Scruma je samo nekoliko pravila koje uspostavljaju kratke feedback cikluse i ma kako ih implemetirali za očekivati je da ćete dobijati više povratnih informacija o proizvodu koji pravite ili usluzi koju pružate ali i o načinu na koji to radite. Kada skupite informacije, očekuje se da modifikujete procese i pravila i krenete dalje, odnosno sve dok plivate, da se vratimo na prethodnu metaforu, neće vam biti hladno - zaključuje Smuđa za Infostud.</p>
        
    </div>
    <Footer/>
    </div>
  )
}

export default Blog1