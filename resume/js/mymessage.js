!function () {


    Bmob.initialize("543cf60e54c97ee5245a4c93dbf8f606", "2ed036022d5273050b70002fecb3fd71");

    let myForm = document.querySelector('#postMessageForm')
    /*
    const query = Bmob.Query("message")
    query.find().then(function (message) {
        let array = message.map((item) => item)
        array.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = `${item.name}:${item.content}`
            let messageList = document.querySelector('#messageList')
            messageList.append(li)
        })
    })
    */

    myForm.addEventListener('submit', function (e) {
        e.preventDefault()

        let name = myForm.querySelector('input[name=name]').value
        let content = myForm.querySelector('input[name=content]').value

        const query = Bmob.Query('message')
        query.set("name", name)
        query.set("content", content)
        query.save()

        let li = document.createElement('li')
        li.innerText = `${name}:${content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        

        /* 有bug
        query.find().then(function (message) {
            console.log(message)
            console.log(message.length)
            console.log(message[message.length - 1].content)
            let li = document.createElement('li')
            li.innerText = `${message[message.length-1].name}:${message[message.length-1].content}`
            let messageList = document.querySelector('#messageList')
            messageList.append(li)
        
        })
         */

    })
   

}.call()
