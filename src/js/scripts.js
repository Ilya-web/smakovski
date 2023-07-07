import IMask from 'imask';
import { Modal } from "bootstrap";

document.addEventListener("DOMContentLoaded", () => {


  // const thanks = new Modal('#modalGoOut');
  //
  // thanks.show()

  // passwordBtn  ---------------------------------------------------
  const passwordBtn = document.querySelectorAll('.input-site-password_icon');
  passwordBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');

      if(input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
      }
      else if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
      }
    })
  })


  // input tel mask --------------------------------------------------
  const inputTel = document.querySelectorAll('[type="tel"]');

  inputTel.forEach(input => {
    const tel = IMask(input, {
      mask: '+{38}(000)000-00-00'
    });
    // clear input tel -----------------------------------------------
    input.addEventListener('blur', function() {
      if (tel.value.length !== 17) {
        tel.value = '';
      }
    });
  });

  // label animate ---------------------------------------------------
  const inputs = document.querySelectorAll('.input-site__input');
  inputs.forEach((input) => {
    if(input.value !== '') {
      input.parentElement.classList.add('active');
    }

    input.addEventListener('focus', () =>{
      const parentInput = input.parentElement;
      parentInput.classList.add('active');
    })

    input.addEventListener('blur', () =>{
      const parentInput = input.parentElement;
      if(input.value === '') {
        parentInput.classList.remove('active');
      }
      console.log(input.value === '')
    })

    input.addEventListener('input', () => {
      const parentInput = input.parentElement.querySelector('.input-site-password_icon');

      if(parentInput) {
        if(input.value !== '') {
          parentInput.classList.add('visible');
        }
        else {
          parentInput.classList.remove('visible');
        }
      }
    })
  });



  //
  // const openMenu = () => {
  //   const btnsMenu = document.querySelectorAll('.btnOpenMenu');
  //   btnsMenu.forEach(btn => {
  //     btn.addEventListener('click', () => {
  //       const btnDataId = btn.getAttribute('data-btn');
  //       const dropMenu = document.getElementById(btnDataId);
  //
  //       if(dropMenu.classList.contains('active')) {
  //         dropMenu.classList.remove('active');
  //       }
  //       else {
  //         dropMenu.classList.add('active');
  //       }
  //     })
  //   })
  // }
  // openMenu()
  //
  //
  //
  //
  // const closeMenu = (menuId, btn) => {
  //   document.addEventListener( 'click', (e) => {
  //     const menu = e.composedPath().includes(menuId);
  //     const btn = e.composedPath().includes(btn);
  //
  //     if (!menu) {
  //       menuId.classList.remove('active')
  //     }
  //   })
  // }




});
