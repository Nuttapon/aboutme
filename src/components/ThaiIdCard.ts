type ThaiIdCard = {
  verify: (id: string) => boolean;
  generate: () => string;
};

const thaiIdCard: ThaiIdCard = {
  verify: (id: string) => {
    if (id == null || id.length !== 13 || !/^[0-9]\d+$/.test(id)) {
      return false;
    }
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(id.charAt(i)) * (13 - i);
    }
    let check = (11 - (sum % 11)) % 10;
    return check === parseInt(id.charAt(12));
  },

  generate: () => {
    const arr = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));
    const d13 =
      11 - arr.map((digit, index) => digit * (13 - index)).reduce((a, b) => a + b, 0);
    const id = arr.join('') + Math.abs(((d13 % 11) > 1) ? d13 : 0);

    return id;
  },
}

export default thaiIdCard;