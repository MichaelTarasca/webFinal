/* Add any JavaScript you need to this file. */

const siteScript = {
  clear: function() {
    var div = document.getElementById('products');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  },
  formatNumber: function(number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAN' }).format(number);
  },

  sortProducts: function(category) {
    var sortArr = [];
    for (const i in goods) {
      if (goods[i].category === category) {
        sortArr.push(goods[i]);
      } else if (category === 'all') {
        sortArr.push(goods[i]);
      }
    }
    return sortArr;
  },

  buildCard: function(goods) {
    let card = document.createElement('div');
    card.classList.add('card');
    let pic = document.createElement('img');
    pic.src = goods.imageUrl;
    let title = document.createElement('h3');
    title.innerHTML = goods.name;
    let desc = document.createElement('h4');
    desc.innerHTML = goods.description;
    let c = document.createElement('h4');
    c.innerHTML = goods.colourOrTone;
    let p = document.createElement('h4');
    p.innerHTML = this.formatNumber(goods.price);
    card.appendChild(pic);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(c);
    card.appendChild(p);
    return card;
  },

  productToScreen: function(goods) {
    this.clear();
    let products = document.getElementById('products');
    for (const i in goods) {
      products.appendChild(this.buildCard(goods[i]));
    }
  },
  loadTextBox: function() {
    //   let b = document.getElementById('orderno');
    //   b.setAttribute('style', 'display: block');
    document.getElementById('orderno').style.display = 'block';
  }
};

window.onload = function() {
  siteScript.productToScreen(goods);
  document.getElementById('All Products').addEventListener('click', () => {
    let products = siteScript.sortProducts('all');
    siteScript.productToScreen(products);
  });
  document.getElementById('guitars').addEventListener('click', () => {
    let products = siteScript.sortProducts('Guitar');
    siteScript.productToScreen(products);
  });
  document.getElementById('pedals').addEventListener('click', () => {
    let products = siteScript.sortProducts('Pedal');
    siteScript.productToScreen(products);
  });
  document.getElementById('amps').addEventListener('click', () => {
    let products = siteScript.sortProducts('Amp');
    siteScript.productToScreen(products);
  });
  document.getElementById('order').addEventListener('click', () => {
    siteScript.loadTextBox();
  });
};
