module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Believe in yourself and others will too.", "Do not be intimidated by the eloquence of others.", "Hard words break no bones, fine words butter no parsnips.","Say hello to others. You will have a happier day.","There is no mistake so great as that of being always right."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getMotivation: (req, res) => {
        const motivations = ["You're AMAZING!", "KEEP GOING!", "ABSOLUTE BEAST!"];
      
        let randomIndex = Math.floor(Math.random() * motivations.length);
        let randomMotivation = motivations[randomIndex];
      
        res.status(200).send(randomMotivation);
    },

    getQuote: (req, res) => {
        const quotes = ["One man with courage makes a majority - Andrew Jackson", "The most difficult thing is the decision to act, the rest is merely tenacity. - Andrew Jackson", "One man with courage makes a majority - Amelia Earhart", "Opportunities dont happen, you create them. - Chris Grosser"];
      
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomIndex];
      
        res.status(200).send(randomQuote);
    },

    createNewPerson: (req, res) => {
        let {name, power} = req.body

        db.push({
            name: name, 
            power: isNaN(+power) ? 1 : +power}
        )
        res.send(db)

    },
    deletePerson: (req,res) => {
        let {name} = req.params

        for(let i = 0; i <db.length; i++){
            if (name === db[i].name){
                db.splice(i, 1)
            }
        }

        res.send(db)
    }
}

const db = [
    {
        name: 'Egha',
        power: '5840',
    },
    {
        name: 'Ben',
        power: '8186',
    },
    {
        name: 'Jared',
        power: '8088',
    },
]
