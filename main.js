/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // listener
    let currentWindowPosition = 0;
    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(navLink => {
        navLink.onclick = function(e) {
            // scroll behavior
            e.preventDefault();

            // get the scrollable element y positon
            let { dataset:{ href }} = e.target;
            console.log(href);            
            
            let targetSection = document.getElementById(href);
            // let scrollableHeight = targetSection.getBoundingClientRect().top;

            let scrollableHeight = targetSection.offsetTop;
            window.scrollTo(0, scrollableHeight - 70);
        }
    });


    // members section
    var memberInfo = [
        {
            name:'member-mat',
            interview:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus enim, eleifend vitae dui sed, scelerisque sollicitudin magna. Phasellus vulputate tincidunt turpis, eget rhoncus leo auctor a. Nam vel nisl quis nisi lobortis imperdiet. Aliquam ut tellus sit amet enim venenatis scelerisque vel eget metus. Praesent ut magna rhoncus, imperdiet massa quis, pellentesque metus. Aliquam sed tempor est. Proin lacus elit, sollicitudin ut turpis nec, vestibulum vehicula lorem. Mauris vel tempor elit, a interdum enim.
            <br/>
            Aenean porta enim eu orci pulvinar ornare. Cras non diam ornare, viverra mauris vel, semper nulla. Nunc consectetur eu enim at sagittis. In efficitur leo et euismod mollis. Suspendisse nec felis eu tellus dignissim ultricies. Pellentesque finibus imperdiet libero. Fusce vitae blandit velit. Suspendisse urna erat, pellentesque eu tellus nec, convallis molestie enim. Vivamus malesuada lacinia metus, id varius tellus fermentum in. Sed sed ullamcorper libero, vitae malesuada ligula.`
        },
        {
            name:'member-anto',
            interview:`Proin fringilla ultricies est id laoreet. Phasellus lobortis mauris eget scelerisque tincidunt. Sed a leo ac purus cursus tempus. Phasellus ultrices sollicitudin hendrerit. Ut ut pellentesque tortor, eu lacinia ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vehicula eget eros eu ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            <br/>
            In tempus malesuada condimentum. Etiam at lorem ut eros rhoncus iaculis quis et ipsum. Mauris et tincidunt risus, in vulputate eros. Suspendisse potenti. Nunc at dictum mi. Sed at pretium ante. Donec hendrerit a massa ac interdum. Mauris sed ante molestie dui feugiat accumsan vel at erat. `
        }
    ];

    var interviewBody = document.getElementById("interview-body");
    var teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach(teamMember => {
        teamMember.onclick = function(e) {
            // g
            let id = e.target.id;
            let memberIns = memberInfo.find(info => info.name == id);

            interviewBody.innerHTML = memberIns.interview;
        }
    });
});
