const app = new Vue({
    el: '#root',
    data: {
        mails: '',
        mailsList: [],
        maxMails: 10,
    },
    methods: {
        generateMailList() {
            const mails = parseInt(this.mails);
            if (!isNaN(mails)) {
                this.mailsList = [];
                for (let i = 0; i <= this.maxMails; i++) {
                    axios
                        .get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            if (response.status === 200) {
                                const emailsGenerate = response.data.response;
                                //  this.numbers = [randomNumber];
                                this.mailsList.push(emailsGenerate);
                            }
                        });
                }
            } else (this.mails && !10); {
                alert('Genero 10 mail, non di più non di meno. Grazie 😃')
            }
        },
    },
});