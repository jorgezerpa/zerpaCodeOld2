class LandingPageProject {
    constructor({ name, image, projectLink }){
        this.name = name;
        this.image = image;
        this.projectLink = projectLink;
    }
}

const landingPageProjects = [
    new LandingPageProject({ name: 'project', image:'lp.png',  projectLink: 'https://jorgezerpa.github.io/agency-landing-page/'  }), 
    new LandingPageProject({ name: 'project', image:'lp2.png', projectLink: 'https://jorgezerpa.github.io/vr-landing-page/'  }), 
    new LandingPageProject({ name: 'project', image:'lp3.png', projectLink: 'https://jorgezerpa.github.io/designer-page/'  }), 
    new LandingPageProject({ name: 'project', image:'lp4.png', projectLink: 'https://jorgezerpa.github.io/app-landing-page/'  }), 
    new LandingPageProject({ name: 'project', image:'lp5.png', projectLink: 'https://jorgezerpa.github.io/geritch-restaurant-REACT/'  }), 
    new LandingPageProject({ name: 'project', image:'lp6.png', projectLink: 'https://jorgezerpa.github.io/beer-home-landing-page/'  }), 
]


class AppProject{
    constructor({ name, description, stack, image, githubLink, projectLink }){
        this.name = name;
        this.description = description;
        this.stack = stack;
        this.image = image;
        this.githubLink = githubLink;
        this.projectLink = projectLink;
    }
}

const appProjects = [
    new AppProject({ name: 'Deliverify', description:'some short description', stack: 'React | node', image:'deliverify.png', githubLink: 'https://github.com/jorgezerpa/delivery-app-be', projectLink: 'https://delivery-1hdsoy5r8-jorgezerpa.vercel.app'  }), 
    new AppProject({ name: 'Exercise App', description:'some short description', stack: 'React', image:'exercise.png', githubLink: 'https://github.com/jorgezerpa/exercise-app', projectLink: 'https://exercise-app-six.vercel.app/'  }), 
    new AppProject({ name: 'Timer App', description:'some short description', stack: 'React Native', image:'timer.png', githubLink: 'https://github.com/jorgezerpa/timer-app-react-native'  }), 
    new AppProject({ name: 'Figma plugin', description:'some short description', stack: 'Figma Framework', image:'schennel.png', githubLink: 'https://github.com/jorgezerpa/schnnel-hero-figma-plugin', projectLink: 'https://www.figma.com/community/plugin/1127303485921047861/Schnell-wireframe'  }), 
    new AppProject({ name: 'Pokedex', description:'some short description', stack: 'React Native', image:'pokedex.png', githubLink: 'https://github.com/jorgezerpa/pokeapi-react-native'  }), 
    new AppProject({ name: 'eCommerce API', description:'some short description', stack: 'Node', image:'ecommerce.png', githubLink: 'https://github.com/jorgezerpa/e-commerce-api'  }), 
    new AppProject({ name: 'Fight game', description:'some short description', stack: 'Vanilla JS', image:'fight.png', githubLink: 'https://github.com/jorgezerpa/street-fighter-clone', projectLink: 'https://jorgezerpa.github.io/street-fighter-clone/'  }), 
    new AppProject({ name: 'Shot game', description:'some short description', stack: 'Vanilla JS', image:'space.png', githubLink: 'https://github.com/jorgezerpa/basic-shoting-game', projectLink: 'https://jorgezerpa.github.io/basic-shoting-game/'  }), 
]



