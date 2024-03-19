document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    let homeLink = document.getElementById('homelink');
    let aboutLink = document.getElementById('aboutlink');
    let portfolioLink = document.getElementById('portfoliolink');
    let blogLink = document.getElementById('bloglink');
    let portfo = document.querySelector('.fa-suitcase')

    // Use buttons to toggle between views
    homeLink.addEventListener('click', function () {
        load_home();
        type();
    });
    aboutLink.addEventListener('click', () => load_about());
    portfolioLink.addEventListener('click', () => load_portfolio());
    portfo.addEventListener('click', () => load_portfolio());
    blogLink.addEventListener('click', () => load_blog());

    function type() {
        const textElement = document.getElementById('text');
        textElement.textContent = '';
        const text = "hi, it's ";
        const name = "diandra";
        let index = 0;

        function typeCharacter() {
            if (index < text.length) {
                textElement.textContent += text[index];
            } else if (index < text.length + name.length) {
                textElement.innerHTML += `<span class="cursor-color">${name[index - text.length]}</span>`;
            }

            index++;

            if (index <= text.length + name.length) {
                setTimeout(typeCharacter, 100); // Adjust the typing speed (milliseconds)
            } else {
                document.getElementById('cursor').style.display = 'inline'; // Show the cursor
            }
        }
    
        typeCharacter();
    }

    // Get all elements with the list-group-item class
    var listGroupItems = document.querySelectorAll('.list-group-item');

    // Add event listeners to each element
    /*listGroupItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            addHoverEffect(item);
        });

        item.addEventListener('mouseout', function () {
            removeHoverEffect(item);
        });
    });*/

  
    // By default, load home
    load_home();
    type();

    function addHoverEffect(element) {
        element.classList.add('active');
        element.setAttribute('aria-current', 'true');
    }
    
    function removeHoverEffect(element) {
        element.classList.remove('active');
        element.removeAttribute('aria-current');
    }
    
    function load_home() {
        aboutLink.classList.remove('active');
        portfolioLink.classList.remove('active');
        blogLink.classList.remove('active');
        homeLink.classList.add('active');
        
        aboutLink.classList.add('text-body-tertiary', 'fw-medium');
        portfolioLink.classList.add('text-body-tertiary', 'fw-medium');
        blogLink.classList.add('text-body-tertiary', 'fw-medium');
        homeLink.classList.remove('text-body-tertiary', 'fw-medium');
        
        document.getElementById('home-view').style.display = 'block';
        document.getElementById('about-view').style.display = 'none';
        document.getElementById('port-view').style.display = 'none';
        document.getElementById('blog-view').style.display = 'none';
    
        aboutLink.removeAttribute('aria-current');
        portfolioLink.removeAttribute('aria-current');
        blogLink.removeAttribute('aria-current');
        homeLink.setAttribute('aria-current', 'page');
    }
    
    function load_about() {
        homeLink.classList.remove('active');
        portfolioLink.classList.remove('active');
        blogLink.classList.remove('active');
        aboutLink.classList.add('active');
        
        aboutLink.classList.remove('text-body-tertiary', 'fw-medium');
        portfolioLink.classList.add('text-body-tertiary', 'fw-medium');
        blogLink.classList.add('text-body-tertiary', 'fw-medium');
        homeLink.classList.add('text-body-tertiary', 'fw-medium');
        
        document.getElementById('home-view').style.display = 'none';
        document.getElementById('about-view').style.display = 'block';
        document.getElementById('port-view').style.display = 'none';
        document.getElementById('blog-view').style.display = 'none';
    
        homeLink.removeAttribute('aria-current');
        portfolioLink.removeAttribute('aria-current');
        blogLink.removeAttribute('aria-current');
        aboutLink.setAttribute('aria-current', 'page');
    }
    
    function load_portfolio() {
        homeLink.classList.remove('active');
        aboutLink.classList.remove('active');
        blogLink.classList.remove('active');
        portfolioLink.classList.add('active');
        
        aboutLink.classList.add('text-body-tertiary', 'fw-medium');
        portfolioLink.classList.remove('text-body-tertiary', 'fw-medium');
        blogLink.classList.add('text-body-tertiary', 'fw-medium');
        homeLink.classList.add('text-body-tertiary', 'fw-medium');
        
        document.getElementById('home-view').style.display = 'none';
        document.getElementById('about-view').style.display = 'none';
        document.getElementById('port-view').style.display = 'block';
        document.getElementById('blog-view').style.display = 'none';
    
        homeLink.removeAttribute('aria-current');
        aboutLink.removeAttribute('aria-current');
        blogLink.removeAttribute('aria-current');
        portfolioLink.setAttribute('aria-current', 'page');
    }
    
    function load_blog() {
        homeLink.classList.remove('active');
        aboutLink.classList.remove('active');
        portfolioLink.classList.remove('active');
        blogLink.classList.add('active');
        
        aboutLink.classList.add('text-body-tertiary', 'fw-medium');
        portfolioLink.classList.add('text-body-tertiary', 'fw-medium');
        blogLink.classList.remove('text-body-tertiary', 'fw-medium');
        homeLink.classList.add('text-body-tertiary', 'fw-medium');
        
        document.getElementById('home-view').style.display = 'none';
        document.getElementById('about-view').style.display = 'none';
        document.getElementById('port-view').style.display = 'none';
        document.getElementById('blog-view').style.display = 'block';
    
        homeLink.removeAttribute('aria-current');
        aboutLink.removeAttribute('aria-current');
        portfolioLink.removeAttribute('aria-current');
        blogLink.setAttribute('aria-current', 'page');
    }
});