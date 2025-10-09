// import React from 'react';
// import logo from '../assets/logo.png'

// const Footer = () => {
//     return (
//         <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content flex justify-between items-center p-4">
        
//   <aside className="grid-flow-col items-center">
  
//     <img className='w-8' src={logo} alt="" />
//     <h5 className='text-lg font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h5>
    
//   </aside>
//   <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  
//   <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//       </svg>
//     </a>
//     <a>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         className="fill-current">
//         <path
//           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//       </svg>
//     </a>
//   </nav>
// </footer>
//     );
// };

// export default Footer;




import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content flex flex-col md:flex-row md:justify-between md:items-center p-4 gap-4 md:gap-0 text-center md:text-left">

      {/* Logo + Title */}
      <aside className="flex justify-center md:justify-start items-center gap-2">
        <img className="w-8" src={logo} alt="Logo" />
        <h5 className="text-lg font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          HERO.IO
        </h5>
      </aside>

      {/* Copyright */}
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>

      {/* Social Icons */}
      <nav className="flex justify-center md:justify-end gap-4">
        {/* Twitter */}
        <a href="#" aria-label="Twitter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current hover:text-[#1DA1F2] transition-colors">
            <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 
            4.932 4.932 0 0 0 2.165-2.724 
            9.864 9.864 0 0 1-3.127 1.195 
            4.916 4.916 0 0 0-8.384 4.482 
            A13.944 13.944 0 0 1 1.671 3.149 
            a4.916 4.916 0 0 0 1.523 6.574 
            4.903 4.903 0 0 1-2.229-.616v.062 
            a4.918 4.918 0 0 0 3.946 4.827 
            4.996 4.996 0 0 1-2.224.084 
            4.93 4.93 0 0 0 4.6 3.419 
            9.867 9.867 0 0 1-6.102 2.104 
            c-.396 0-.788-.023-1.175-.069 
            a13.945 13.945 0 0 0 7.557 2.212 
            c9.054 0 14.001-7.496 13.995-14.236 
            a9.936 9.936 0 0 0 2.457-2.549z" />
          </svg>
        </a>

        {/* YouTube */}
        <a href="#" aria-label="YouTube">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current hover:text-[#FF0000] transition-colors">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0
            -3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 
            8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 
            3.897-.266 4.356-2.62 4.385-8.816
            -.029-6.185-.484-8.549-4.385-8.816zm-10.615 
            12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" aria-label="Facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current hover:text-[#1877F2] transition-colors">
            <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333
            C14 5.378 14.192 5 15.115 5h2.885V0h-3.808
            C10.596 0 9 1.583 9 4.615V8z" />
          </svg>
        </a>
      </nav>

    </footer>
  );
};

export default Footer;
