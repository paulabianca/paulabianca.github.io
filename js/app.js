'use strict';

function clean(node) {
  for (var n = 0; n < node.childNodes.length; n++) {
    var child = node.childNodes[n];
    if (child.nodeType === 8 || child.nodeType === 3 && !/\S/.test(child.nodeValue)) {
      node.removeChild(child);
      n--;
    } else if (child.nodeType === 1) {
      clean(child);
    }
  }
}
clean(document);

function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
}
function delClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

var logo = document.getElementById('logo');
var email = document.getElementById('email');
var resume = document.getElementById('resume');
var cursor = document.getElementById('cursor');
var cursorSvg = cursor.querySelector('svg');

document.body.addEventListener('mouseenter', function(e) {
  addClass(cursor, 'active');
});
document.body.addEventListener('mouseleave', function(e) {
  delClass(cursor, 'active');
});

document.addEventListener('mousemove', function(e) {
  var logoRect = logo.getBoundingClientRect();
  cursor.style.transform = 'matrix(1, 0, 0, 1, ' + e.clientX + ', ' + e.clientY + ')';
  cursorSvg.style.transform = 'matrix(1, 0, 0, 1, ' + (logoRect.left - e.clientX) + ', ' + (logoRect.top - e.clientY) + ')';
});

logo.addEventListener('mouseenter', function(e) {
  addClass(cursor, 'logo');
});
logo.addEventListener('mouseleave', function(e) {
  delClass(cursor, 'logo');
});

email.addEventListener('mouseenter', function(e) {
  addClass(cursor, 'email');
});
email.addEventListener('mouseleave', function(e) {
  delClass(cursor, 'email');
});

resume.addEventListener('mouseenter', function(e) {
  addClass(cursor, 'resume');
});
resume.addEventListener('mouseleave', function(e) {
  delClass(cursor, 'resume');
});
