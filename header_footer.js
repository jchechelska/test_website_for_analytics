class Header1 extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!--Navbar-->
      <nav class="relative container mx-auto p-6">
          <!--Flex container-->
          <div class="flex items-center justify-between">
              <!--Logo -->
              <div class="pt-2">
                  <a href="index.html" class="top-menu">
                      <img src="icons/logo1.png" alt="">
                  </a>
              </div>
              <!--Menu items -->
              <div class="hidden md:flex space-x-6">
                  <a href="food.html" class="top-menu hover:text-sky-700">Food recipes</a>
                  <a href="trivia.html" class="top-menu hover:text-sky-700">Trivia</a>
                  <a href="language.html" class="top-menu hover:text-sky-700">Language tips</a>
                  <a href="products.html" class="top-menu hover:text-sky-700">Products</a>
                  <a href="about.html" class="top-menu hover:text-sky-700">About Us</a>
                  <a href="login.html" class="top-menu hover:text-sky-700">Log in</a>
              </div>
              <!--Button -->
              <a href="newsletter.html" class="top-menu hidden md:block p-3 px-6 pt-2 text-white bg-sky-700 rounded-full baseline hover:bg-sky-600">Newsletter signup</a>
              <!-- Hamburger icon -->
              <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
                  <span class="hamburger-top"></span>
                  <span class="hamburger-middle"></span>
                  <span class="hamburger-bottom"></span>
              </button>
          </div>
          <!-- Mobile menu -->
          <div class="md:hidden">
              <div id="menu" class="absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                  <a href="food.html" class="top-menu hover:text-sky-700">Food recipes</a>
                  <a href="trivia.html" class="top-menu hover:text-sky-700">Trivia</a>
                  <a href="language.html" class="top-menu hover:text-sky-700">Language tips</a>
                  <a href="products.html" class="top-menu hover:text-sky-700">Products</a>
                  <a href="about.html" class="top-menu hover:text-sky-700">About Us</a>
                  <a href="login.html" class="top-menu hover:text-sky-700">Log in</a>
                  <a href="newsletter.html" class="top-menu hover:text-sky-700">Newsletter signup</a>
              </div>
          </div>
      </nav>
          `
    }
  }
  
  //Footer
  
  class Footer1 extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <!-- Footer -->
        <footer class="bg-sky-700">
            <!-- Flex container -->
            <div class="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <!-- Logo and social links -->
                <div class="flex flex-col items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div class="flex justify-center space-x-4">
                        <div>
                        <a href="index.html" class="bottom-menu">
                            <img src="icons/logo2.png" style="height:80px">
                        </a>
                        </div>
                        <a href="https://www.instagram.com/a.hehe/?hl=en">
                            <img src="icons/instagram-logo.png" style="height:40px" class="mt-4">
                        </a>
                        <a href="https://www.linkedin.com/in/joanna-chechelska-b11661222/">
                            <img src="icons/linkedin.png" style="height:40px"class="mt-4">
                        </a>
                        <a href="about.html">
                            <img src="icons/email.png" style="height:40px"class="mt-4">
                        </a>
                    </div>
                </div>
                <div class="flex justify-around space-x-32">
                    <div class="flex flex-col space-y-4">
                        <a href="food.html" class="bottom-menu hover:text-white">Food recipes</a>
                        <a href="trivia.html" class="bottom-menu hover:text-white">Trivia</a>
                        <a href="language.html" class="bottom-menu hover:text-white">Language tips</a>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <a href="products.html" class="bottom-menu hover:text-white">Products</a>
                        <a href="about.html" class="bottom-menu hover:text-white">About Us</a>
                        <a href="newsletter.html" class="bottom-menu hover:text-white">Newsletter signup</a>
                    </div>
                </div>
    
    
            </div>
        </footer>
  
        `
      
    }
  }
  

  class Header2 extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!--Navbar-->
      <nav class="relative container mx-auto p-6">
          <!--Flex container-->
          <div class="flex items-center justify-between">
              <!--Logo -->
              <div class="pt-2">
                  <a href="../index.html" class="top-menu">
                      <img src="../icons/logo1.png" alt="">
                  </a>
              </div>
              <!--Menu items -->
              <div class="hidden md:flex space-x-6">
                  <a href="../food.html" class="top-menu hover:text-sky-700">Food recipes</a>
                  <a href="../trivia.html" class="top-menu hover:text-sky-700">Trivia</a>
                  <a href="../language.html" class="top-menu hover:text-sky-700">Language tips</a>
                  <a href="../products.html" class="top-menu hover:text-sky-700">Products</a>
                  <a href="../about.html" class="top-menu hover:text-sky-700">About Us</a>
                  <a href="../login.html" class="top-menu hover:text-sky-700">Log in</a>
              </div>
              <!--Button -->
              <a href="../newsletter.html" class="top-menu hidden md:block p-3 px-6 pt-2 text-white bg-sky-700 rounded-full baseline hover:bg-sky-600">Newsletter signup</a>
              <!-- Hamburger icon -->
              <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
                  <span class="hamburger-top"></span>
                  <span class="hamburger-middle"></span>
                  <span class="hamburger-bottom"></span>
              </button>
          </div>
          <!-- Mobile menu -->
          <div class="md:hidden">
              <div id="menu" class="absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                  <a href="../food.html" class="top-menu hover:text-sky-700">Food recipes</a>
                  <a href="../trivia.html" class="top-menu hover:text-sky-700">Trivia</a>
                  <a href="../language.html" class="top-menu hover:text-sky-700">Language tips</a>
                  <a href="../products.html" class="top-menu hover:text-sky-700">Products</a>
                  <a href="../about.html" class="top-menu hover:text-sky-700">About Us</a>
                  <a href="../login.html" class="top-menu hover:text-sky-700">Log in</a>
                  <a href="../newsletter.html" class="top-menu hover:text-sky-700">Newsletter signup</a>
              </div>
          </div>
      </nav>
          `
    }
  }
  
  //Footer
  
  class Footer2 extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <!-- Footer -->
        <footer class="bg-sky-700">
            <!-- Flex container -->
            <div class="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <!-- Logo and social links -->
                <div class="flex flex-col items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div class="flex justify-center space-x-4">
                        <div>
                        <a href="../index.html" class="bottom-menu">
                            <img src="../icons/logo2.png" style="height:80px">
                        </a>
                        </div>
                        <a href="https://www.instagram.com/a.hehe/?hl=en">
                            <img src="../icons/instagram-logo.png" style="height:40px" class="mt-4">
                        </a>
                        <a href="https://www.linkedin.com/in/joanna-chechelska-b11661222/">
                            <img src="../icons/linkedin.png" style="height:40px"class="mt-4">
                        </a>
                        <a href="../about.html">
                            <img src="../icons/email.png" style="height:40px"class="mt-4">
                        </a>
                    </div>
                </div>
                <div class="flex justify-around space-x-32">
                    <div class="flex flex-col space-y-4">
                        <a href="../food.html" class="bottom-menu hover:text-white">Food recipes</a>
                        <a href="../trivia.html" class="bottom-menu hover:text-white">Trivia</a>
                        <a href="../language.html" class="bottom-menu hover:text-white">Language tips</a>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <a href="../products.html" class="bottom-menu hover:text-white">Products</a>
                        <a href="../about.html" class="bottom-menu hover:text-white">About Us</a>
                        <a href="../newsletter.html" class="bottom-menu hover:text-white">Newsletter signup</a>
                    </div>
                </div>
    
    
            </div>
        </footer>
  
        `
      
    }
  }


  class Header3 extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!--Navbar-->
      <nav class="relative container mx-auto p-6">
          <!--Flex container-->
          <div class="flex items-center justify-between">
              <!--Logo -->
              <div class="pt-2">
                  <a href="../../index.html" class="top-menu">
                      <img src="../../icons/logo1.png" alt="">
                  </a>
              </div>
              <!--Menu items -->
              <div class="hidden md:flex space-x-6">
                  <a href="../../food.html" class="top-menu hover:text-sky-700">Food recipes</a>
                  <a href="../../trivia.html" class="top-menu hover:text-sky-700">Trivia</a>
                  <a href="../../language.html" class="top-menu hover:text-sky-700">Language tips</a>
                  <a href="../../products.html" class="top-menu hover:text-sky-700">Products</a>
                  <a href="../../about.html" class="top-menu hover:text-sky-700">About Us</a>
                  <a href="../../login.html" class="top-menu hover:text-sky-700">Log in</a>
              </div>
              <!--Button -->
              <a href="../../newsletter.html" class="top-menu hidden md:block p-3 px-6 pt-2 text-white bg-sky-700 rounded-full baseline hover:bg-sky-600">Newsletter signup</a>
              <!-- Hamburger icon -->
              <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
                  <span class="hamburger-top"></span>
                  <span class="hamburger-middle"></span>
                  <span class="hamburger-bottom"></span>
              </button>
          </div>
          <!-- Mobile menu -->
          <div class="md:hidden">
              <div id="menu" class="absolute flex flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                  <a href="../../food.html" class="top-menu hover:text-sky-700">Food recipes</a>
                  <a href="../../trivia.html" class="top-menu hover:text-sky-700">Trivia</a>
                  <a href="../../language.html" class="top-menu hover:text-sky-700">Language tips</a>
                  <a href="../../products.html" class="top-menu hover:text-sky-700">Products</a>
                  <a href="../../about.html" class="top-menu hover:text-sky-700">About Us</a>
                  <a href="../../login.html" class="top-menu hover:text-sky-700">Log in</a>
                  <a href="../../newsletter.html" class="top-menu hover:text-sky-700">Newsletter signup</a>
              </div>
          </div>
      </nav>
          `
    }
  }
  
  //Footer
  
  class Footer3 extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <!-- Footer -->
        <footer class="bg-sky-700">
            <!-- Flex container -->
            <div class="container flex flex-col justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <!-- Logo and social links -->
                <div class="flex flex-col items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div class="flex justify-center space-x-4">
                        <div>
                        <a href="../../index.html" class="bottom-menu">
                            <img src="../../icons/logo2.png" style="height:80px">
                        </a>
                        </div>
                        <a href="https://www.instagram.com/a.hehe/?hl=en">
                            <img src="../../icons/instagram-logo.png" style="height:40px" class="mt-4">
                        </a>
                        <a href="https://www.linkedin.com/in/joanna-chechelska-b11661222/">
                            <img src="../../icons/linkedin.png" style="height:40px"class="mt-4">
                        </a>
                        <a href="../../about.html">
                            <img src="../../icons/email.png" style="height:40px"class="mt-4">
                        </a>
                    </div>
                </div>
                <div class="flex justify-around space-x-32">
                    <div class="flex flex-col space-y-4">
                        <a href="../../food.html" class="bottom-menu hover:text-white">Food recipes</a>
                        <a href="../../trivia.html" class="bottom-menu hover:text-white">Trivia</a>
                        <a href="../../language.html" class="bottom-menu hover:text-white">Language tips</a>
                    </div>
                    <div class="flex flex-col space-y-4">
                        <a href="../../products.html" class="bottom-menu hover:text-white">Products</a>
                        <a href="../../about.html" class="bottom-menu hover:text-white">About Us</a>
                        <a href="../../newsletter.html" class="bottom-menu hover:text-white">Newsletter signup</a>
                    </div>
                </div>
    
    
            </div>
        </footer>
  
        `
      
    }
  }


  customElements.define('main-header1', Header1);
  customElements.define('main-footer1', Footer1);
  customElements.define('main-header2', Header2);
  customElements.define('main-footer2', Footer2);
  customElements.define('main-header3', Header3);
  customElements.define('main-footer3', Footer3);