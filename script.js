const score1 = document.getElementById('score1')
const score2 = document.getElementById('score2')
const score3 = document.getElementById('score3')
const score4 = document.getElementById('score4')
const score5 = document.getElementById('score5')
const btn = document.getElementById('button')
const paragraph1 = document.createElement('p')
const paragraph2 = document.createElement('p')

function result() {
    const score1Val = score1.value
    const score2Val = score2.value
    const score3Val = score3.value
    const score4Val = score4.value
    const score5Val = score5.value

    const result = ((score1Val+score2Val+score3Val+score4Val+score5Val)/5)

    paragraph1.innerHTML = `Student's average score is ${result}`

    let status
    // let recommendation 

    paragraph2.innerHTML = result > 80 ? status = 'Status: Exceptional performance' : result > 60 ? status = 'Status: Above average' : result > 50 ? status = 'Status: Average performance' : result <= 40 ? status = 'Status: Below average' : status = 'Status: Fail'

    section.append(paragraph1)
    section.append(paragraph2)
}

// btn.addEventListener('click', result)