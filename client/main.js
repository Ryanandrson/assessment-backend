

const complimentBtn = document.getElementById("complimentButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

//---------------------------------------------------------------------------------------------

const fortuneButton = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneButton.addEventListener('click', getFortune)

//---------------------------------------------------------------------------------------------

const motivationButton = document.getElementById("motivationButton")

const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

motivationButton.addEventListener('click', getMotivation)

//---------------------------------------------------------------------------------------------

const quoteButton = document.getElementById("quoteButton")

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const personForm = document.getElementById("person-form")

const postPerson = (event) => {
    event.preventDefault()
    peopleSection.innerHTML =  ``


    const body = {
        name: document.getElementById('name').value,
        power: document.getElementById('power').value

    }
    axios.post("http://localhost:4000/api/person/", body)
    .then((response) => {
        const data = response.data;
        showPeopleOnDom(data)

    })
    .catch
};

const deleteForm = document.getElementById('delete-form')
const deleteInput = document.getElementById('delete-name')

const deletePerson = (event) => {
    event.preventDefault()
    peopleSection.innerHTML =  ``

    const name = deleteInput.value

    axios.delete(`http://localhost:4000/api/delete/${name}`)
    .then((response) => {
        const data = response.data;
        showPeopleOnDom(data)
    })
}

const showPeopleOnDom = (data) => {
    for(let i = 0; i < data.length; i++){
        let para = document.createElement('p')

       para.innerHTML =`
        <span class= "name-text">${data[i].name}</span> has power <spanc lass= "power-text">${data[i].power}</span>
       `
       peopleSection.appendChild(para)
    }
}

const peopleSection = document.getElementById("people")

quoteButton.addEventListener('click', getQuote)
personForm.addEventListener('submit', postPerson)
deleteForm.addEventListener('submit', deletePerson)