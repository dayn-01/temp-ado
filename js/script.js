window.addEventListener('DOMContentLoaded', event => {

    var bannerFade = function(){
        const navbarCollapsible = document.body.querySelector('.letter-contents');
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('w3-animate-bottom');
        } else {
            navbarCollapsible.classList.add('w3-animate-bottom');

        }
    };

    if(window.innerWidth > 1000) {
        document.addEventListener('scroll', bannerFade);
    } else {
         const navbarCollapsible = document.body.querySelector('.letter-contents');
         navbarCollapsible.classList.add('w3-animate-bottom');
    }

    function populateMessge() {
        $.getJSON('assets/json/messages.json', function(data) {
            
            newMessage = data;
            
            let listMessage = newMessage['messages']
            let listLength = listMessage.length;
    
            let messageFormatter = "";
            for (let i = 0; i < listLength ; i++) {

                let msgSender = listMessage[i]['sender'];
                let msgSocialType = listMessage[i]['sender_socials']['social_type'];
                let msgSocialName = listMessage[i]['sender_socials']['social_name'];
                let msgSocialLink = listMessage[i]['sender_socials']['social_link'];
                let msgActual = listMessage[i]['message'];
                let msgImage = listMessage[i]['message_img_link'];

                let icon = "";
                switch (msgSocialType) {
                    case 'twitter':
                        icon = '<i class="fa-brands fa-twitter"></i></i>';
                        break;
                    case 'instagram':
                        icon = '<i class="fa-brands fa-instagram"></i>';
                        break;
                    case 'discord':
                        icon = '<i class="fa-brands fa-discord"></i>';
                        break;
                    case 'facebook':
                        icon = '<i class="fa-brands fa-discord"></i>';
                        break;
                }

                let messageFormatterTemp = '';
                if(msgImage == undefined || msgImage == "") {
                    messageFormatterTemp = 
                        `<div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">`+msgSender+`</h5>
                                        <p class="card-text">`+msgActual+`</p>
                                        <div class="text-right">
                                            <a class="btn btn-blue" href="`+msgSocialLink+`"> - `+icon+` `+msgSocialName+`</a>
                                        </div>
                                    </div>
                                </div>
                        `;
                } else {
                    messageFormatterTemp = 
                        `<div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">`+msgSender+`</h5>
                                        <p class="card-text">`+msgActual+`</p>
                                        <div class="center-img">
                                            <img style="margin:auto; width: 180px" src="`+msgImage+`">
                                        </div>
                                        <div class="text-right">
                                            <a class="btn btn-blue" href="`+msgSocialLink+`"> - `+icon+` `+msgSocialName+`</a>
                                        </div>
                                    </div>
                                </div>
                        `;
                }

                
    
    
                messageFormatter = messageFormatter + messageFormatterTemp;
            }    
    
            const boxProper = document.getElementById('contents-target-div');  
            boxProper.innerHTML = messageFormatter;
        })
        
    }

    populateMessge();
});

