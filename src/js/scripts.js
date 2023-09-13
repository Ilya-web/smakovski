import IMask from 'imask';
import { Tooltip, Modal } from "bootstrap";


// loader-------------------------------------------------------------

const loader = document.querySelector(".loader");
if (loader) {
  const bar = document.querySelector(".loader-progress-bar_bar");

  let startWidth = 0;
  const endWidth = bar.dataset.size;
  const interval = setInterval(frame, 40);

  function frame() {
    if (startWidth >= endWidth) {
      clearInterval(interval);
    } else {
      startWidth++;
      bar.style.width = `${endWidth}%`;
      document.querySelector('.loader-progress-bar_perс').innerText = `${startWidth}%`;
    }
  }
}


document.addEventListener("DOMContentLoaded", () => {

  setTimeout(() => {
    if (loader) {
      loader.classList.add('loaded');
    }
  }, 2000)


  // const thanks = new Modal('#modalReviewProgram');
  //
  // thanks.show()


  const howWorksAccordion = document.querySelectorAll('.howWorksAccordion');
  howWorksAccordion.forEach(accord => {
    const items = accord.querySelectorAll('.howWorksAccordion-item');
    items.forEach(i => {
      const btn = i.querySelector('.howWorksAccordion-header__button');
      btn.addEventListener('click', () => {
        if (i.classList.contains('active')) {
          i.classList.remove('active')
        } else {
          items.forEach(item => {
            item.classList.remove('active');
          })
          i.classList.add('active')
        }
      })
    })
  })

  //smooth scroll for active item accordion-----------------------
  if (window.innerWidth < 992) {
    const accordionItems = document.querySelectorAll('.accordion-collapse');
    accordionItems.forEach((el) => {
      el.addEventListener('shown.bs.collapse', (e) => {

        window.scroll({
          top: window.pageYOffset + el.getBoundingClientRect().y - 180,
          left: 0,
          behavior: 'smooth'
        })
      })
    })
  }


  //deliveryType--------------------------------------------------
  const deliveryType = document.querySelectorAll('.deliveryType-js');
  deliveryType.forEach(item => {
    const input = item.querySelector('input[type="radio"]');

    input.addEventListener('change', () => {
      deliveryType.forEach(item => {
        item.classList.remove('active')
      });
      if (input.checked) {
        item.classList.add('active')
      }
    })
  })

  //allergen-count------------------------------------------------
  const allergenInput = document.querySelectorAll('.allergen-input');
  const allergenCount = document.querySelector('.allergen-count');
  const allergenCountClear = document.querySelector('.allergen-count-clear');

  allergenInput.forEach(item => {
    const input = item.querySelector('input');

    input.addEventListener('change', () => {
      let countInput = 0;
      allergenInput.forEach(item => {
        if (item.querySelector('input').checked) {
          countInput++;
        }
      })
      allergenCount.innerText = countInput
    })
  })

  if (allergenCountClear) {
    allergenCountClear.addEventListener('click', () => {
      allergenInput.forEach(item => {
        const input = item.querySelector('input');
        input.checked = false;
        allergenCount.innerText = 0;
      })
    })
  }


  //addProducts----------------------------------------------------
  const addProducts = document.querySelectorAll('.addProducts');

  addProducts.forEach(addProduct => {
    const checkbox = addProduct.querySelector('input[type="checkbox"]');
    const contentInputs = addProduct.querySelectorAll('.addProducts_content input[type="checkbox"]')

    if (checkbox) {
      checkbox.addEventListener('input', () => {
        if (!checkbox.checked) {
          contentInputs.forEach(input => {
            input.checked = false
          })
        }
      })
    }
  })


  //open activityBox-----------------------------------------------

  const btnInfo = document.querySelectorAll('.btnInfo');
  const activityBox = document.querySelector('.activity-box');
  const backdrop = document.querySelector('.backdrop');

  btnInfo.forEach(btn => {
    btn.addEventListener('click', () => {
      activityBox.classList.toggle('open');
      backdrop.classList.toggle('active');
    })
  })

  // scroll width ---------------------------------------------------
  let div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();
  const modals = document.querySelectorAll('.modal')
  modals.forEach(md => {
    md.addEventListener('show.bs.modal', event => {
      document.documentElement.style.setProperty('--scroll-width', `${scrollWidth}px`);
    })
    md.addEventListener('hidden.bs.modal', event => {
      document.documentElement.style.setProperty('--scroll-width', `0px`);
    })
  })


  // tooltip  --------------------------------------------------------
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((button) => {
    new Tooltip(button);
  });

  // counter  --------------------------------------------------------
  // const counter = document.querySelectorAll('.counter');
  // counter.forEach(c => {
  //  const plus = c.querySelector('.counter-plus');
  //  const minus = c.querySelector('.counter-minus');
  //  const input = c.querySelector('input');
  //  let count = Number(input.value);
  //
  //   minus.addEventListener("click", () => {
  //     if(count !== 1) {
  //       count -= 1;
  //       input.value = count;
  //     }
  //   });
  //
  //   plus.addEventListener("click", () => {
  //     count += 1;
  //     input.value = count;
  //   });
  // })


  // menu desktop  ---------------------------------------------------
  const menuBtn = document.querySelectorAll('.menuBtn');
  const menuDesktop = document.querySelector('#menuDesktop');
  const wrapMenu = document.querySelector('.wrap-menu');
  menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      menuDesktop.classList.toggle('show');

      wrapMenu.classList.toggle('show');

      menuBtn.forEach(btn => {
        btn.classList.toggle('active');
      })
    })
  })


  // passwordBtn  ---------------------------------------------------
  const passwordBtn = document.querySelectorAll('.passwordVisible');
  passwordBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      const iconPassword = btn.parentElement.querySelector('.passwordVisible svg use');
      const iconPasswordUrl = iconPassword.getAttribute('xlink:href');
      const res = iconPasswordUrl.split('#');

      if (input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text');
        iconPassword.setAttribute('xlink:href', res[0] + '#password-2');
      } else if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');
        iconPassword.setAttribute('xlink:href', res[0] + '#password');
      }
    })
  })


  const inputMaskInit = () => {
    // input tel mask --------------------------------------------------
    const inputTel = document.querySelectorAll('[type="tel"]');

    inputTel.forEach(input => {
      const tel = IMask(input, {
        mask: '+{38}(000)000-00-00'
      });
      // clear input tel -----------------------------------------------
      input.addEventListener('blur', function () {
        if (tel.value.length !== 17) {
          tel.value = '';
        }
      });
    });
  }
  inputMaskInit();

 const inputLabelInit = () => {
   // label animate ---------------------------------------------------
   const inputs = document.querySelectorAll('.input-site__input');
   inputs.forEach((input) => {
     if (input.value !== '') {
       input.parentElement.classList.add('active');
     }

     input.addEventListener('focus', () => {
       const parentInput = input.parentElement;
       parentInput.classList.add('active');
       parentInput.classList.add('focus');
     })

     input.addEventListener('blur', () => {
       const parentInput = input.parentElement;
       parentInput.classList.remove('focus');
       if (input.value === '') {
         parentInput.classList.remove('active');
       }
     })
   });
 }
  inputLabelInit();

});
