export default function transformer(number) {
    const re = new RegExp('^8');
    const re2 = new RegExp('[ ()-]', 'g');
    let copyStr = number;
  
    copyStr = copyStr.replace(re, '+7');
  
    return copyStr.replace(re2, '');
  }