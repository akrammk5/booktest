// Country Selector with All Amazon Links
const amazonLinks = {
    uk: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/uk/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/uk/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '£',
        ebookPrice: '5.99',
        paperbackPrice: '11.99'
    },
    us: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/us/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/us/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '$',
        ebookPrice: '5.99',
        paperbackPrice: '14.99'
    },
    ca: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/ca/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/ca/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: 'CAD $',
        ebookPrice: '7.99',
        paperbackPrice: '19.99'
    },
    de: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/de/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/de/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '€',
        ebookPrice: '5.99',
        paperbackPrice: '12.99'
    },
    fr: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/fr/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/fr/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '€',
        ebookPrice: '5.99',
        paperbackPrice: '12.99'
    },
    es: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/es/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/es/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '€',
        ebookPrice: '5.99',
        paperbackPrice: '12.99'
    },
    it: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/it/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/it/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '€',
        ebookPrice: '5.99',
        paperbackPrice: '12.99'
    },
    nl: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/nl/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/nl/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '€',
        ebookPrice: '5.99',
        paperbackPrice: '12.99'
    },
    jp: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/jp/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/jp/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '¥',
        ebookPrice: '899',
        paperbackPrice: '1899'
    },
    au: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/au/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/au/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: 'AUD $',
        ebookPrice: '8.99',
        paperbackPrice: '21.99'
    },
    br: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/br/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/br/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: 'R$',
        ebookPrice: '29.99',
        paperbackPrice: '69.99'
    },
    mx: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/mx/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/mx/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: 'MXN $',
        ebookPrice: '99',
        paperbackPrice: '299'
    },
    in: {
        ebook: 'https://kdp.amazon.com/amazon-dp-action/in/dualbookshelf.marketplacelink/B0FXPZFFYC',
        paperback: 'https://kdp.amazon.com/amazon-dp-action/in/dualbookshelf.marketplacelink/B0FX3MFFSP',
        currency: '₹',
        ebookPrice: '499',
        paperbackPrice: '999'
    }
};

function selectCountry(country) {
    // Remove active class from all buttons
    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active to selected
    document.querySelector(`[data-country="${country}"]`).classList.add('active');

    // Update links
    const links = amazonLinks[country];
    document.getElementById('ebookLink').href = links.ebook;
    document.getElementById('paperbackLink').href = links.paperback;

    // Update prices in display
    const priceDisplay = document.getElementById('displayPrice');
    if (priceDisplay) {
        priceDisplay.textContent = links.currency + links.ebookPrice;
    }

    // Save selection to localStorage
    localStorage.setItem('selectedCountry', country);

    console.log(`Selected country: ${country}`);
}

// Auto-select based on user's previous choice or default to UK
document.addEventListener('DOMContentLoaded', function() {
    const savedCountry = localStorage.getItem('selectedCountry') || 'uk';
    selectCountry(savedCountry);
});