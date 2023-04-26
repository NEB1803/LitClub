/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [

{
        title : "In Order to Live: A North Korean Girl's Journey to Freedom",
        authors : "Yeonmi Park",
        conferences : "Genre - Autobiography",
        researchYr : "North Korea",
        citebox : "popup1",
        image : "https://i.imgur.com/qxYJYKv.jpg",
        citation: {
            vancouver: "Human rights activist  Yeonmi Park escaped North Korea with her mother in 2007 at age 13. Her debut memoir details her struggle for survival even after crossing the borders of the secluded country known as “the Hermit kingdom”. This book provides a glimpse into the unimaginable atrocities taking place in North Korea.  Nearly a century of oppression has done great damage to the psychologies of its citizens. It is a place where there is no concept of love of family and friends, where there is only love for the great leader. Her harrowing struggle involves being sold with her mother into slave marriages by Chinese brokers, and although she at first tried to hide the painful details, she realized how her survival story could inspire others. Moreover, her sister had also escaped earlier and had vanished into China for years, prompting the author to go public with her story in the hope of finding her sister. We often take being born into freedom for granted. A must-read for citizens of any country, anywhere."
        },
        abstract: "We all have our own deserts. They may not be the same as my desert, but we all have to cross them to find a purpose in life and be free",
        absbox: "absPopup1"
    },

    {
        title : "The Alchemist",
        authors : "Paulo Coelho",
        conferences : "Genre - Fiction",
        researchYr : "Brazil",
        citebox : "popup2",
        image : "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
        citation: {
            vancouver: "The Alchemist is a novel by Paulo Coelho that tells the story of Santiago, a shepherd boy who dreams of a treasure hidden in the Egyptian pyramids. Santiago embarks on a journey to fulfill his destiny, encountering various obstacles and meeting important people along the way who teach him important lessons about life and the pursuit of one's dreams. Through his journey, Santiago learns that the treasure he seeks is not material wealth, but rather the knowledge and wisdom he gains from his experiences. The novel is a philosophical reflection on the importance of following one's heart and the power of the universe to guide us towards our destiny."
        },
        abstract: "There is only one thing that makes a dream impossible to achieve: the fear of failure",
        absbox: "absPopup2"
    }
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            Quote
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            Summary
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);