<template>

    <Navbar :user="user"/>

    <!-- Page Header -->
    <header class="header" id="home">
        <div class="container">
            <div class="infos">
                <h6 class="subtitle">hello,I'm</h6>
                <h6 class="title">{{user.name}}</h6>
                <p>Front End Developer</p>

                <div class="buttons pt-3">
                    <button class="btn btn-primary rounded">HIRE ME</button>
                    <a href="http://localhost:5000/download/deneme" class="btn btn-dark rounded">DOWNLOAD CV</a> <!-- apiye istek -->
                </div>      

                <div class="socials mt-4">
                   <Socials :socials="user.socials"/>
               </div>
           </div>              
           <div class="img-holder">
            <img src="../assets/imgs/man.svg" alt="">
        </div>      
    </div>  

    <!-- Header-widget -->
    <div class="widget">
        <i style="font-size:25px;position: absolute;left: 15px;" class="ti-github mt-2"></i>
        <div class="widget-item">
            <h2>{{github.public_repos}}</h2>
            <p>Repos</p>
        </div>
        <div class="widget-item">
            <h2>{{github.followers}}</h2>
            <p>Followers</p>
        </div>
        <div class="widget-item">
            <h2>{{github.following}}</h2>
            <p>Following</p>
        </div>
    </div>
</header>
<!-- End of Page Header -->

<About :github="github" :user="user"/>

<!-- Service section -->
<section id="service" class="section">
    <div class="container text-center">
        <h6 class="subtitle">Service</h6>
        <h6 class="section-title mb-4">What I Do</h6>
        <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br> rerum commodi corrupti, temporibus non quam.</p>

        <div class="row">
            <div v-for="sr in user.service" class="col-sm-6 col-md-3 mb-4">
                <div class="custom-card card border">
                    <div class="card-body">
                        <i :class="sr.icon"></i>
                        <h5>{{sr.name}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End of Sectoin -->

<!-- Skills section -->
<section id="skills" class="section">
    <div class="container text-center">
        <h6 class="subtitle">Skills</h6>
        <h6 class="section-title mb-4">Why Choose me</h6>
        <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br> rerum commodi corrupti, temporibus non quam.</p>

        <div class="row text-left">
            <div v-for="sk in user.skills" class="col-sm-6">
                <h6 class="mb-3">{{sk.name}}</h6>
                <div class="progress">
                    <div class="progress-bar bg-primary" role="progressbar" :style="{width: sk.percent+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>{{sk.percent}}%</span></div>
                </div>
            </div>
        </div>  
    </div>
</section>
<!-- End of Skills sections -->

<!-- Portfolio section -->
<!--<section id="portfolio" class="section">
    <div class="container text-center">
        <h6 class="subtitle">Portfolio</h6>
        <h6 class="section-title mb-4">Check My Wonderful Works</h6>
        <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br> rerum commodi corrupti, temporibus non quam.</p>

        <div class="row">
            <div class="col-sm-4">
                <div class="img-wrapper">
                    <img src="../assets/imgs/folio-1.jpg" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>Project Title</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>  
                    </div>
                </div>
                <div class="img-wrapper">
                    <img src="../assets/imgs/folio-2.jpg" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>Project Title</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>                              
                    </div>
                </div>                  
            </div>
            <div class="col-sm-4">
                <div class="img-wrapper">
                    <img src="../assets/imgs/folio-3.jpg" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>Project Title</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>  
                    </div>
                </div>
                <div class="img-wrapper">
                    <img src="../assets/imgs/folio-4.jpg" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>Project Title</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>                              
                    </div>
                </div>                  
            </div>
            <div class="col-sm-4">
                <div class="img-wrapper">
                    <img src="../assets/imgs/folio-5.jpg" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>Project Title</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>  
                    </div>
                </div>
                <div class="img-wrapper">
                    <img src="../assets/imgs/folio-6.jpg" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>Project Title</h5>
                            <a href="javascript:void(0)"><i class="ti-zoom-in"></i></a>
                            <a href="javascript:void(0)"><i class="ti-link"></i></a>
                        </div>                              
                    </div>
                </div>                  
            </div>
        </div>

    </div>
</section>-->
<!-- End of portfolio section -->


<!-- Hire me section -->
<section class="bg-gray p-0 section">
    <div class="container">
        <div class="card bg-primary">
            <div class="card-body text-light">
                <div class="row align-items-center">
                    <div class="col-sm-9 text-center text-sm-left">
                        <h5 class="mt-3">Hire Me For Your Project</h5>
                        <p class="mb-3">Accusantium labore nostrum similique quisquam.</p>
                    </div>
                    <div class="col-sm-3 text-center text-sm-right">
                        <button class="btn btn-light rounded">Hire Me!</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</section>      
<!-- End od Hire me section. -->

<!-- Contact Section -->
<section id="contact" class="position-relative section">
    <div class="container text-center">
        <h6 class="subtitle">Contact</h6>
        <h6 class="section-title mb-4">Get In Touch With Me</h6>
        <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br> rerum commodi corrupti, temporibus non quam.</p>

        <ContactForm :user="user"/>
    </div>  
    <div id="map">
        <iframe src="https://snazzymaps.com/embed/1243"></iframe>
    </div>      
</section>
<!-- End of Contact Section -->

<Footer :user="user"/>

</template>

<script>

    import {ref,onMounted } from "vue"
    import axios from "axios"

    import Navbar from "../components/Navbar"
    import About from "../components/About"
    import Socials from "../components/Socials"
    import ContactForm from "../components/ContactForm"
    import Footer from "../components/Footer"
    export default {
      components:{
        Navbar,
        About,
        Socials,
        ContactForm,
        Footer
    },
    setup(){
        const API_URL = "http://localhost:5000/user"

        const user = ref({
            about:"",
            contact:{
                location:"",
                tel:"",
                email:""
            },
            image:"",
            name:"",
            password:"",
            service:[
            {
                name:"",
                icon:""
            }
            ],
            skills:[
            {
                name:"",
                percent:""

            }
            ],
            socials:{
                github:"",
                instagram:"",
                google:"",
                linkedin:""
            },
            username:"" 
        })

        const github = ref({})


        
        const getUser = async()=>{

            const response = await fetch(API_URL)
            const json = await response.json()

            //console.log(json)
            user.value = json[0]

            getGithub()
        }
        getUser()


        //github api

        const getGithub = async()=>{
            axios.get("https://api.github.com/users/"+user.value.username)
            .then((res)=>{
                console.log(res.data)
                github.value = res.data
            })

        }

        return {user,github}
    }
}
</script>
