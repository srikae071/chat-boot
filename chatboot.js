let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let userinputEl = document.getElementById('userInput')
let chatcont = document.getElementById('ChatContainer')

let sendMsgBtnEl = document.getElementById('sendMsgBtn')

let usersgEl = document.createElement('p')
let uservalue = userinputEl.value
usersgEl.textContent = uservalue
chatcont.appendChild(usersgEl)
userinputEl.value = ""


sendMsgBtnEl.onclick = function() {
    let usermsg = userinputEl.value
    let usermsgspm = document.createElement('p')
    usermsgspm.textContent = usermsg
    chatcont.appendChild(usermsgspm)
    userinputEl.value = ""
    rplyfromchatbot()


}

function rplyfromchatbot() {
    let noofbotmsgs = chatbotMsgList.length
    let chatbootmsg = chatbotMsgList[Math.ceil(Math.random() * noofbotmsgs) - 1]
    let chatmsg = document.createElement('span')
    chatmsg.textContent = chatbootmsg
    chatcont.appendChild(chatmsg)



}