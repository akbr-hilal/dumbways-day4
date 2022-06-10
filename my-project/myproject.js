let dataProject = []
console.log(dataProject);

function addProject(event) {
    event.preventDefault()

    let title = document.getElementById('input-title').value
    let startDate = document.getElementById('input-startDate').value
    let endDate = document.getElementById('input-endDate').value
    let description = document.getElementById('input-title').value
    let technologis = document.getElementById('input-technologis1', 'input-technologis2', 'input-technologis3', 'input-technologis4').checked
    let image = document.getElementById('input-image').files
    
    image = URL.createObjectURL(image[0])

    let project = {
        title,
        startDate,
        endDate,
        description,
        technologis,
        image
    }

    dataProject.push(project)
    console.log(dataProject)

    renderProject()
}

function renderProject() {
    document.getElementById('listProject').innerHTML =
    `
        <div class="project-list-item">
            <div class="project-image">
                <img src="../asset/img/uplabs.png" alt="">
            </div>
            <div class="project-content">
                <h2>
                    <a href="myproject-detail.html" target="_blank">
                        Road Trip Mobile Apps
                    </a>
                </h2>
                <div class="duration-project">
                    <p>Durasi: <span>1 Bulan</span></p>
                </div>
                <div class="description-project">
                    <p>
                        UI/UX Design Road Trip Apps
                        Ini merupakan UI/UX Design pertama saya menggunakan Figma. Saya membuat UI/UX Design terinspirasi dari berbagai macam aplikasi terutama aplikasi perjalanan.
                    </p>
                </div>
                <div class="technologis-project">
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-node-js"></i>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div class="btn-group">
                    <div class="btn-left">
                        <button>Edit</button>
                    </div>
                    <div class="btn-right">
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>   
    `

    for(let i = 0; i < dataProject.length; i++){
        document.getElementById('listProject').innerHTML += 
        `
        <div class="project-list-item">
            <div class="project-image">
                <img src="../asset/img/uplabs.png" alt="">
            </div>
            <div class="project-content">
                <h2>
                    <a href="myproject-detail.html" target="_blank">
                        Road Trip Mobile Apps
                    </a>
                </h2>
                <div class="duration-project">
                    <p>Durasi: <span>1 Bulan</span></p>
                </div>
                <div class="description-project">
                    <p>
                        UI/UX Design Road Trip Apps
                        Ini merupakan UI/UX Design pertama saya menggunakan Figma. Saya membuat UI/UX Design terinspirasi dari berbagai macam aplikasi terutama aplikasi perjalanan.
                    </p>
                </div>
                <div class="technologis-project">
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-node-js"></i>
                    <i class="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div class="btn-group">
                    <div class="btn-left">
                        <button>Edit</button>
                    </div>
                    <div class="btn-right">
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div> 
        `
    }
}