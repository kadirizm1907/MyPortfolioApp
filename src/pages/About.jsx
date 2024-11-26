import Image from "react-bootstrap/Image";
import me from "../img/me.jpeg";
import { Container } from "react-bootstrap";
import PrivateRouter from "../components/PrivateRouter";


const About = () => {
  return (
    <Container fluid className="text-center mt-5 pt-5 d-flex align-items-center justify-content-center display-6   ">

       <div className="text-center mt-5  ">
        
     
        <legend><Image src={me} thumbnail width={250}></Image></legend>
        <p className=" about-text">
          Hello, I am Kadir. I was born in 1990 in Erzurum, one of the beautiful
          cities of Turkey. In the past, I had 8 years of teaching experience as a teacher
          that added . After moving to the Netherlands, I
          started working in the IT sector to add a new color to my life. This
          sector was an area that I wanted to do passionately during my teaching
          years.
          {/* Merhaba, ben Kadir. 1990 yilinda Turkiyenin guzel sehirlerinden biri olan Erzurumda dunyaya geldim. Gecmiste hayatima renk katan 8 yillik ogretmenlik tecrubem oldu. Hollandaya tasindiktan sonra hayatima yeni bir renk katmak icin IT sektorune basladim. Bu sektor ogretmenlik yillarimda tutkuyla yapmak istedigim bir alandi. */}{" "}
          <br />I completed the Front end course after a challenging and
          knowledge-filled period. This was my first official step in the IT
          field. I had previously taken web-design and simple Photoshop courses
          on my own. With the approximately 6-month exchange rate I received
          from Clarusway, I started to take more confident steps in this field.
          I did many projects during this course. You can find these on the
          Projects page.{" "}
          {/* Zorlu ve bir o kadar da bilgi dolu bir donem sonunda Front end kursunu tamamladim. Bu benim IT alaninda attigim ilk resmi adimdi. Daha once kendi cabamla web-design ve basit photoshop dersleri almistim. Clarusway den aldigim yaklasik 6 ay suren kur ile bu alana daha emin adimlarla ilerlemeye basladim. Bu kurs boyunca bircok proje yaptim. Bunlari Projeler sayfasinda bulabilirsiniz. */}
          <br />
          Other than these, I can describe myself as a social individual. Since
          my childhood, I participated in sports activities in all the schools I
          attended and served as team captain in most of these periods. I played
          actively in football, table tennis and volleyball teams in middle
          school and high school. I was a captain in football and volleyball. I
          played in the volleyball team of the faculty of education at the
          university. Now I play in a volleyball club in the Netherlands. These
          are my passions in sports. I can say that my hobbies include camping,
          fishing, reading books, solving puzzles and playing playstation games.
          {/* Bunlarin disinda kendimi sosyal bir birey olarak tanimlayabilirim. Cocuklugumdan beri gittigim tum okullarda spor etkinliklerinde bulundum ve bu donemlerin cogunda takim kaptanligi gorevini yaptim. Ortaokul ve lisede futbol, masatenisi ve volleyball takimlarinda aktif oynadim. Futbol ve voleybolda kaptanlik yaptim. Universitede de egitim fakultesinin voleybol takiminda oynadim. Simdi Hollanda da bir voleybol kulubunde oynuyorum. Bunlar benim spor alanindaki tutkularim. Kamp yapmak, balik tutmak, kitap okumak ve bulmaca cozmek ve playstation oyunlari oynamak da hobilerim diyebilirim.  */}
          <br />I know my native language, Turkish, at the highest level. In
          addition, I speak English at B1 level and Dutch at A2+ level.
          {/* Anadilim turkceyi en ust seviyede biliyorum. Bunlarin yaninda b1 seviyede Ingilizce ve a2+ seviyede Hollandaca biliyorum.  */}
          <br />I can say that{" "}
          <a
            href="https://en.wikipedia.org/wiki/Chinghiz_Aitmatov"
            target="blank"
          >
            Cengiz Aytmatov
          </a>
          's book "
          <a
            href="https://en.wikipedia.org/wiki/The_Day_Lasts_More_Than_a_Hundred_Years"
            target="blank"
          >
            A day is worth a century
          </a>
          " is my favorite book.
          {/* Cengiz Aytmatovun "Gun olur asra bedel" kitabi en sevidigim kitap diyebilirim. */}{" "}
          {/* Alev Alatli ve Elif Safak in eserlerini de akici buluyorum. But
          the works that had the most impact on my social life and daily life
          were written by{" "}
          <a href="https://fgulen.com/en/" target="blank">
            Fethullah Gülen
          </a>{" "}*/}
          . I can say that the message of social life he gave in his works
          impressed me greatly.{" "}
          {/* Ama benim toplumsal yasamima ve gundelik hayatima en cok etki eden eserler Fethullah Gulen tarafindan kaleme alindi. Eserlerinde verdigi toplumsal hayat mesaji beni cok etkiledi diyebilirim.  */}
          {/* Cocuklugum sehirden uzak kirsal bolgede gecti. Sehirden uzak buyumek dogaya ve insana daha saygili olmami sagladi. */}{" "}
        </p>
        
      </div>
    </Container>
  );
 
};

export default About;
