import React from "react";
import '../styles/History.css'
import Banner from '../assets/parece.jpeg'

const History = () => {
    return (
        <div className="history" style={{backgroundImage: `url(${Banner})`}}>

            <div className="part1">
                <h1>The History of Coffee</h1>
                <p>No one knows exactly how or when coffee was discovered, though there are many legends about its origin.</p>
            </div>

            <div className="part2">
                 <h2>An Ethiopian Legend</h2>
                 <p>
                    Coffee grown worldwide can trace its heritage back centuries to the ancient coffee forests on the Ethiopian plateau. There, legend says the goat herder Kaldi first discovered the potential of these beloved beans. 
                    The story goes that that Kaldi discovered coffee after he noticed that after eating the berries from a certain tree, his goats became so energetic that they did not want to sleep at night. 
                    Kaldi reported his findings to the abbot of the local monastery, who made a drink with the berries and found that it kept him alert through the long hours of evening prayer. The abbot shared his discovery with the other monks at the monastery, and knowledge of the energizing berries began to spread.
                    As word moved east and coffee reached the Arabian peninsula, it began a journey which would bring these beans across the globe.
                 </p>
            </div>

            <div className="part3">
                 <h2>The Arabian Peninsula</h2>
                 <p>
                    Coffee cultivation and trade began on the Arabian Peninsula.  By the 15th century, coffee was being grown in the Yemeni district of Arabia and by the 16th century it was known in Persia, Egypt, Syria, and Turkey.
                    Coffee was not only enjoyed in homes, but also in the many public coffee houses — called qahveh khaneh — which began to appear in cities across the Near East. The popularity of the coffee houses was unequaled and people frequented them for all kinds of social activity. 
                    Not only did the patrons drink coffee and engage in conversation, but they also listened to music, watched performers, played chess and kept current on the news.  Coffee houses quickly became such an important center for the exchange of information that they were often referred to as “Schools of the Wise.”
                    With thousands of pilgrims visiting the holy city of Mecca each year from all over the world, knowledge of this “wine of Araby” began to spread. 
                </p>
            </div>

            <div className="part4">
                 <h2>Coffee Comes to Europe</h2>
                 <p>European travelers to the Near East brought back stories of an unusual dark black beverage. By the 17th century, coffee had made its way to Europe and was becoming popular across the continent. 
                    Some people reacted to this new beverage with suspicion or fear, calling it the “bitter invention of Satan.” The local clergy condemned coffee when it came to Venice in 1615. The controversy was so great that Pope Clement VIII was asked to intervene. He decided to taste the beverage for himself before making a decision, and found the drink so satisfying that he gave it papal approval.
                    Despite such controversy, coffee houses were quickly becoming centers of social activity and communication in the major cities of England, Austria, France, Germany and Holland. In England “penny universities” sprang up, so called because for the price of a penny one could purchase a cup of coffee and engage in stimulating conversation.  
                    Coffee began to replace the common breakfast drink beverages of the time — beer and wine. Those who drank coffee instead of alcohol began the day alert and energized, and not surprisingly, the quality of their work was greatly improved. (We like to think of this a precursor to the modern office coffee service.)
                    By the mid-17th century, there were over 300 coffee houses in London, many of which attracted like-minded patrons, including merchants, shippers, brokers and artists.
                    Many businesses grew out of these specialized coffee houses. Lloyd's of London, for example, came into existence at the Edward Lloyd's Coffee House.
                </p>
            </div>

            <div className="part5">
                <h2>Coming to the Americas</h2>
                <p>
                    In 1714, the Mayor of Amsterdam presented a gift of a young coffee plant to King Louis XIV of France. The King ordered it to be planted in the Royal Botanical Garden in Paris. In 1723, a young naval officer, Gabriel de Clieu obtained a seedling from the King's plant. Despite a challenging voyage — complete with horrendous weather, a saboteur who tried to destroy the seedling, and a pirate attack — he managed to transport it safely to Martinique.  
                    Once planted, the seedling not only thrived, but it’s credited with the spread of over 18 million coffee trees on the island of Martinique in the next 50 years. Even more incredible is that this seedling was the parent of all coffee trees throughout the Caribbean, South and Central America
                    The famed Brazilian coffee owes its existence to Francisco de Mello Palheta, who was sent by the emperor to French Guiana to get coffee seedlings. The French were not willing to share, but the French Governor's wife, captivated by his good looks, gave him a large bouquet of flowers before he left— buried inside were enough coffee seeds to begin what is today a billion-dollar industry.
                    Missionaries and travelers, traders and colonists continued to carry coffee seeds to new lands, and coffee trees were planted worldwide. Plantations were established in magnificent tropical forests and on rugged mountain highlands. Some crops flourished, while others were short-lived. New nations were established on coffee economies. Fortunes were made and lost. By the end of the 18th century, coffee had become one of the world's most profitable export crops. After crude oil, coffee is the most sought commodity in the world.
                </p>
            </div>
        </div>
    );
}

export default History;