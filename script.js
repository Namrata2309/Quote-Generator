const displayQuote =document.getElementById("quote");
const displayAuthor =document.getElementById("author");


function generate(){
    var quotes = {
        'William Shakespeare':'The world is but a stage, where we play our roles—some with grace, others with folly. Yet, in the end, we all must exit.',
        'Jane Austen':'It is not the grandeur of the home, nor the weight of fortune, but the depth of understanding that makes a true match.',
        'Mark Twain':'The man who does not read has no advantage over the man who cannot read—both are blind to the wonders of the world.',
        'Emily Dickinson':'The heart is a bird that flies unseen, yet the sky of it is vast and infinite.',
        'Charles Dickens':'It is not the number of years, but the depth of their moments that makes a life rich and full.',
        'F. Scott Fitzgerald':'The past is a mirror we sometimes gaze into, but it is the future, with all its unclaimed beauty, that truly holds our gaze.',
        'Virginia Woolf':'We are made of memories, each one a thread woven into the fabric of who we are. Yet it is the unraveling that teaches us most.',
        'George Orwell':'Freedom is not a luxury to be savored in moments of calm—it is a right to be fought for in the face of every storm.',
        'Leo Tolstoy':'In the quiet of the soul, we discover that the truest battles are not fought with swords but with the courage to forgive.',
        'Oscar Wilde':'To be natural is the most beautiful thing, but in a world of masks, it has become the rarest.',
        ' A.P.J. Abdul Kalam':'Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.',
        'Swami Vivekananda':'Arise, awake, and stop not until the goal is reached.',
        ' Rabindranath Tagore':'You can not cross the sea merely by standing and staring at the water.',
        'Chanakya':'A person should not be too honest. Straight trees are cut first and honest people are screwed first.'
    }
    var authors = Object.keys(quotes);
    var author =authors[ Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];

    displayQuote.innerHTML = quote;
    displayAuthor.innerHTML = author;
    
    
}

