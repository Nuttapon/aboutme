type ThaiIdCard = {
  verify: (id: string) => boolean;
  generate: (personType: 'individual' | 'juristic') => string;
};

const thaiIdCard: ThaiIdCard = {
  verify: (id: string) => {
    if (id == null || id.length !== 13 || !/^\d+$/.test(id)) {
      return false;
    }
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(id.charAt(i)) * (13 - i);
    }
    let check = (11 - (sum % 11)) % 10;
    return check === parseInt(id.charAt(12));
  },

  generate: (personType) => {
    let id = personType === 'individual' ? `${Math.floor(Math.random() * 8) + 1}` : '0';
    let sum = parseInt(id) * 13;
    for (let i = 1; i < 12; i++) {
      const digit = Math.floor(Math.random() * 10);
      id += digit.toString();
      sum += digit * (13 - i);
    }
    const checkDigit = (11 - (sum % 11)) % 10;
    id += checkDigit.toString();

    return id;
  },
}

export default thaiIdCard;