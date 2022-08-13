const globalContainer = document.querySelector('.globalContainer');

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        globalContainer.style.display = 'block'
    }
  };