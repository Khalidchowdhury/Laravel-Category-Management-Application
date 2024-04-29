

document.addEventListener("DOMContentLoaded", function() {
  // Handle hover for main dropdown
  var featureDropdown = document.querySelector('#featureDropdown > a');
  var featureMenu = document.getElementById('featureMenu');
  
  featureDropdown.closest('.nav-item').addEventListener('mouseenter', function() {
    featureMenu.classList.add('show');
    this.classList.add('show'); // Add 'show' to the parent '.dropdown' as well
  });
  
  featureDropdown.closest('.nav-item').addEventListener('mouseleave', function() {
    featureMenu.classList.remove('show');
    this.classList.remove('show'); // Remove 'show' from the parent '.dropdown'
  });

  // Handle hover for nested dropdowns
  document.querySelectorAll('#featureMenu .dropdown').forEach(function(element) {
    var nestedMenu = element.querySelector('.dropdown-menu');
    element.addEventListener("mouseenter", function() {
      nestedMenu.classList.add('show');
      this.classList.add('show'); // Make sure to show the parent
    });
    element.addEventListener("mouseleave", function() {
      nestedMenu.classList.remove('show');
      this.classList.remove('show'); // Hide the parent
    });
  });


  // Mobile dropdown toggle
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.dropdown-item.dropdown').forEach(function(element) {
      var dropdownLink = element.querySelector('.dropdown-item-custom');
      dropdownLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent navigating
        var nestedMenu = element.querySelector('.dropdown-menu');
        // Toggle the 'show' class to display or hide the nested dropdown
        if (nestedMenu.classList.contains('show')) {
          nestedMenu.classList.remove('show');
          element.classList.remove('show');
        } else {
          // Hide other open menus
          document.querySelectorAll('.dropdown-item.dropdown .dropdown-menu.show').forEach(function(el) {
            el.classList.remove('show');
            el.parentNode.classList.remove('show');
          });
          nestedMenu.classList.add('show');
          element.classList.add('show');
        }
      });
    });
  }
});




// carosel
$(document).ready(function(){
  var carousel = $(".carousel1");

  carousel.owlCarousel({
    responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
    },
    dots: false,
    onInitialized: counter, // Set counter when the carousel is initialized
    onTranslated: counter // Update counter when the carousel position changes
  });

  // Function to update the counter
  function counter(event) {
    var items = event.item.count; // Total number of items
    var item = event.item.index + 1; // Current item index

    // Format the current item number with leading zeros if needed
    var currentItem = ("0" + item).slice(-2);
    // Display the current item number out of the total number of items
    $(".owl-counter").text(currentItem + "/" + items);
  }



  // Initialize carousel2 (assuming it doesn't require responsive options)
  $(document).ready(function(){
    $(".carousel2").owlCarousel({
      responsive:{
        0:{
          items:1,
          nav:false // Set nav to false to hide navigation buttons
        },
        600:{
          items:3,
          nav:false
        },
        1000:{
          items:5,
          nav:false
        }
      },
      dots: true
    });
  });
  
  



  $(document).ready(function(){
    var owl = $(".carousel3").owlCarousel({
      responsive:{
        0:{
          items:1,
          nav:false, // Enable navigation buttons
        },
        600:{
          items:3,
          nav:true,
        },
        1000:{
          items:4,
          nav:true,
        }
      },
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"] // Example using Font Awesome icons
    });
  
    // Add mousewheel event
    owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY > 0) {
        owl.trigger('prev.owl', [300]); // Scroll speed in milliseconds
      } else {
        owl.trigger('next.owl', [300]);
      }
      e.preventDefault();
    });
  });





  $(document).ready(function(){
    var owl = $(".carousel4").owlCarousel({
      responsive:{
        0:{
          items:1,
          nav:false, // Enable navigation buttons
        },
        600:{
          items:3,
          nav:true,
        },
        1000:{
          items:4,
          nav:true,
        }
      },
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"] // Example using Font Awesome icons
    });
  
    // Add mousewheel event
    owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY > 0) {
        owl.trigger('prev.owl', [300]); // Scroll speed in milliseconds
      } else {
        owl.trigger('next.owl', [300]);
      }
      e.preventDefault();
    });
  });





  $(document).ready(function(){
    var owl = $(".carousel5").owlCarousel({
      responsive:{
        0:{
          items:1,
          nav:false, // Enable navigation buttons
        },
        600:{
          items:3,
          nav:true,
        },
        1000:{
          items:4,
          nav:true,
        }
      },
      dots: false,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"] // Example using Font Awesome icons
    });
  
    // Add mousewheel event
    owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY > 0) {
        owl.trigger('prev.owl', [300]); // Scroll speed in milliseconds
      } else {
        owl.trigger('next.owl', [300]);
      }
      e.preventDefault();
    });
  });




    // Initialize carousel2 (assuming it doesn't require responsive options)
    $(document).ready(function(){
      $(".carousel6").owlCarousel({
        responsive:{
          0:{
            items:1,
            nav:false // Set nav to false to hide navigation buttons
          },
          600:{
            items:1,
            nav:false
          },
          1000:{
            items:1,
            nav:false
          }
        },
        dots: true
      });
    });
  
  


});







// floating whatsapp
$('.floating-wpp').floatingWhatsApp({

  // phone number
  phone: '',

  // message to send
  message: '',

  // icon size
  size: '72px',

  // background color
  backgroundColor: '#25D366',

  // or right
  position: 'right', 

  // message in popup
  popupMessage: '',

  // show a chat popup on hover
  showPopup: false,

  // show on IE
  showOnIE: true,
  
  // in milliseconds
  autoOpenTimer: 0,

  // header color
  headerColor: '#128C7E',

  // header title
  headerTitle: '',

  // z-index property
  zIndex: 0,

  // custom icon
  buttonImage: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 800 800" width="800" height="800"><defs><clipPath id="_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ"><rect width="800" height="800"/></clipPath></defs><g clip-path="url(#_clipPath_A3g8G5hPEGG2L0B6hFCxamU4cc8rfqzQ)"><g><path d=" M 787.59 800 L 12.41 800 C 5.556 800 0 793.332 0 785.108 L 0 14.892 C 0 6.667 5.556 0 12.41 0 L 787.59 0 C 794.444 0 800 6.667 800 14.892 L 800 785.108 C 800 793.332 794.444 800 787.59 800 Z " fill="rgb(37,211,102)"/></g><g><path d=" M 508.558 450.429 C 502.67 447.483 473.723 433.24 468.325 431.273 C 462.929 429.308 459.003 428.328 455.078 434.22 C 451.153 440.114 439.869 453.377 436.434 457.307 C 433 461.236 429.565 461.729 423.677 458.78 C 417.79 455.834 398.818 449.617 376.328 429.556 C 358.825 413.943 347.008 394.663 343.574 388.768 C 340.139 382.873 343.207 379.687 346.155 376.752 C 348.804 374.113 352.044 369.874 354.987 366.436 C 357.931 362.999 358.912 360.541 360.875 356.614 C 362.837 352.683 361.857 349.246 360.383 346.299 C 358.912 343.352 347.136 314.369 342.231 302.579 C 337.451 291.099 332.597 292.654 328.983 292.472 C 325.552 292.301 321.622 292.265 317.698 292.265 C 313.773 292.265 307.394 293.739 301.996 299.632 C 296.6 305.527 281.389 319.772 281.389 348.752 C 281.389 377.735 302.487 405.731 305.431 409.661 C 308.376 413.592 346.949 473.062 406.015 498.566 C 420.062 504.634 431.03 508.256 439.581 510.969 C 453.685 515.451 466.521 514.818 476.666 513.302 C 487.978 511.613 511.502 499.06 516.409 485.307 C 521.315 471.55 521.315 459.762 519.842 457.307 C 518.371 454.851 514.446 453.377 508.558 450.429 Z  M 401.126 597.117 L 401.047 597.117 C 365.902 597.104 331.431 587.661 301.36 569.817 L 294.208 565.572 L 220.08 585.017 L 239.866 512.743 L 235.21 505.332 C 215.604 474.149 205.248 438.108 205.264 401.1 C 205.307 293.113 293.17 205.257 401.204 205.257 C 453.518 205.275 502.693 225.674 539.673 262.696 C 576.651 299.716 597.004 348.925 596.983 401.258 C 596.939 509.254 509.078 597.117 401.126 597.117 Z  M 567.816 234.565 C 523.327 190.024 464.161 165.484 401.124 165.458 C 271.24 165.458 165.529 271.161 165.477 401.085 C 165.46 442.617 176.311 483.154 196.932 518.892 L 163.502 641 L 288.421 608.232 C 322.839 627.005 361.591 636.901 401.03 636.913 L 401.126 636.913 L 401.127 636.913 C 530.998 636.913 636.717 531.2 636.77 401.274 C 636.794 338.309 612.306 279.105 567.816 234.565" fill-rule="evenodd" fill="rgb(255,255,255)"/></g></g></svg>',
  
});




//products  pagenation

const products = [
  { name: "Offshore Plates", description: "Explore our offshore plates designed for exceptional strength and durability in offshore structures, oil platforms, and marine projects.", image: "../images/product/Offshore  Plates.png" },

  
  { name: "Structural Plates", description: "These structural plates are versatile and find extensive use in diverse construction projects, including bridges and highway infrastructure.", image: "../images/product/Structural Plates.png" },

  { name: "Pressure Vessel Plates", description: "Our pressure vessel plates are engineered for high-stress environments, providing exceptional strength and resistance for applications in demanding pressure vessel operations.", image: "../images/product/Pressure Vessel Plates.png" },

  { name: "Beams", description: "These structural beams offer diverse solutions for construction and offshore applications, providing optimal strength, versatility, and adherence to EuroNorm standards.", image: "../images/product/Beams.png" },

  { name: "Channels", description: "These channels provide versatile and reliable solutions for construction, offering optimal strength and adherence to industry specifications.", image: "../images/product/Channels.png" },

  { name: "Flats", description: "Explore our structural flats that offer versatile solutions for construction projects, providing flat and wide surfaces with specified mechanical properties, ensuring performance in structural applications.", image: "../images/product/Flats.png" },

  { name: "Hollow Sections", description: "Our hollow sections, meeting EN10210 standards, provide versatile and structurally sound solutions for construction with various dimensions and applicability in diverse conditions.", image: "../images/product/Hollow Sections.png" },

  { name: "Angles", description: "These angles  are crucial in construction, featuring L-shaped profiles that offer stability and support with specified mechanical properties for diverse applications.", image: "../images/product/Angles.png" },

  { name: "Offshore Seamless Pipes", description: "Explore our offshore seamless pipes that deliver durable solutions for marine environments, catering to offshore drilling and oil/gas transportation needs", image: "../images/product/Offshore Seamless Pipes.png" },

  { name: "Welded Pipes", description: "These welded pipes find widespread use in industries for conveying liquids and gases, as well as in construction and infrastructure projects.", image: "../images/product/Welded Pipes.png" },

  { name: "Stainless Steel Pipes", description: "Experience durability and versatility in one with our stainless steel tubes, designed for excellence in plumbing, construction, and industrial processes.", image: "../images/product/Stainless Steel Pipes.png" },

  { name: "Fittings", description: "Our fittings, in diverse materials and sizes, excel in plumbing, piping, and industrial applications, ensuring seamless flow, precise direction, and optimal control.", image: "../images/product/Fittings.png" },

  { name: "Flanges", description: "Elevate your piping solutions with our essential flanges – circular components meticulously designed with secure bolt holes, ensuring optimal connections for efficient assembly and maintenance across diverse industries.", image: "../images/product/Flanges.png" },

  { name: "Bolts & Nuts", description: "From heavy machinery to everyday structures, these sturdy companions ensure security, stability, and durability across diverse applications.", image: "../images/product/Bolts & Nuts.png" },

  { name: "Gaskets", description: "Discover tight, leak-free seals with our durable gaskets. Perfect for pipes and machinery, ensuring efficiency in every application.", image: "../images/product/Gaskets.png" },

  { name: "Manual Valves", description: "These valves offer easy, hands-on control for various applications, ensuring precision and reliability with every turn to control the flow and direction of fluids.", image: "../images/product/Manual Valves.png" },

  { name: "Pressure & Temperature Gauges", description: "Elevate monitoring with our pressure and temperature gauge. Compact and reliable, it delivers precise readings, ensuring optimal conditions in any setting.", image: "../images/product/Pressure & Temperature Gauges.png" },

  { name: "Instrument Tubings & Fittings", description: "Perfect your instrumentation with our tubings & fittings to provide a reliable conduit for fluids and facilitate efficient control. ", image: "../images/product/Instrument Tubings Fittings.png" },

  { name: "Industrial Hoses & Fittings", description: "Elevate industrial fluid systems with our hoses & fittings—precision-designed for durability and seamless connections.", image: "../images/product/Industrial Hoses Fittings.png" },



  // Add more products as needed
];


const element = document.querySelector(".pagination-container ul");
const productList = document.getElementById("product-list");
let totalPages = Math.ceil(products.length / 5);
let currentPage = 1;



function showProducts(page) {
  const start = (page - 1) * 5;
  const end = start + 5;
  const selectedProducts = products.slice(start, end);

  productList.innerHTML = selectedProducts.map(product => `
      <a href="${product.name.replace(/\s+/g, '')}.html" class="product-link" style="text-decoration: none; color: inherit;">
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
      </a>
  `).join('');

  // Scroll to the top of the product list
  productList.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Update current page item background color
  const paginationItems = document.querySelectorAll('.pagination-container ul li.numb');
  paginationItems.forEach(item => {
    item.classList.remove('active');
    if (parseInt(item.textContent) === page) {
      item.classList.add('active');
    }
  });
}

function createPagination(totalPages, page) {
  let liTag = '';
  let beforePage = page - 1;
  let afterPage = page + 1;

  if (page > 1) {
      liTag += `<li class="prev" onclick="createPagination(${totalPages}, ${page - 1})"><span>Prev</span></li>`;
  }

  if (page > 2) {
      liTag += `<li class="numb" onclick="createPagination(${totalPages}, 1)"><span>1</span></li>`;
      if (page > 3) {
          liTag += `<li class="dots"><span>...</span></li>`;
      }
  }

  for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages || plength < 1) {
          continue;
      }
      let active = page == plength ? "active" : "";
      let bgColor = page == plength ? "background-color: #FF4A23;" : "";
      liTag += `<li class="numb ${active}" onclick="createPagination(${totalPages}, ${plength})" style="${bgColor}"><span>${plength}</span></li>`;
  }

  if (page < totalPages - 1) {
      if (page < totalPages - 2) {
          liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="numb" onclick="createPagination(${totalPages}, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
      liTag += `<li class="next" onclick="createPagination(${totalPages}, ${page + 1})"><span>Next</span></li>`;
  }

  element.innerHTML = liTag;  // Ensure this matches your HTML element for pagination
  showProducts(page);
}

// Initialize pagination and product display
document.addEventListener('DOMContentLoaded', () => {
  createPagination(totalPages, 1);
});









