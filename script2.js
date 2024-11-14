function toggleBulb(bulbId) {
    const bulb = document.getElementById(bulbId);
    if (bulb.src.includes('bulb1.png')) {
        bulb.src = 'bulb2.png'; 
    } else {
        bulb.src = 'bulb1.png';
    }
}