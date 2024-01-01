
document.getElementById('add-button').addEventListener('click', handdleAdd);
document.getElementById('clear-button').addEventListener('click', handdleClear);


function handdleAdd() {
  const message = document.getElementById('message-content').value;
  const cancelable = document.getElementById('cancelable').checked;
  const type = document.querySelector('input[name="type"]:checked').value;

  const toast = createToast(message, cancelable, type);
  document.getElementById('toasts').prepend(toast);
  
  setTimeout(() => toast.remove(), getDuration());
}

function createToast(message, cancelable, type) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('toast')
  wrapper.classList.add(`${type}-toast`);
  
  const prgraph = document.createElement('p');
  prgraph.classList.add('message');
  prgraph.textContent = message.length > 0 ? message : getDefaultMessage(type);
  wrapper.appendChild(prgraph);
  
  if (cancelable) {
    const xbutton = document.createElement('button');
    xbutton.textContent = 'X';
    xbutton.classList.add('cancel-button');
    xbutton.addEventListener('click', () => wrapper.remove());
    wrapper.appendChild(xbutton);
  }
  return wrapper;
 
}

function getDuration() {
  const timer = parseInt(document.getElementById('duration').value);
  if (isNaN(timer) || timer < 500) {
    return 500;
  }
  return timer;
}

function getDefaultMessage(type) {
  return type === 'error' ? 'Error.' : 'Success!';
}

function handdleClear() {
  document.getElementById('toasts').innerHTML = '';
}