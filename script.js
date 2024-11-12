function downloadConfig(provider) {
    let url;
    
    switch (provider) {
        case 'axis':
            url = 'youtube.com'; // Sesuaikan path file
            break;
        case 'telkomsel':
            url = 'configs/telkomsel.ehi'; // Sesuaikan path file
            break;
        case 'indosat':
            url = 'configs/indosat.ehi'; // Sesuaikan path file
            break;
        default:
            alert('Provider tidak dikenal');
            return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = `${provider}_config.ehi`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}