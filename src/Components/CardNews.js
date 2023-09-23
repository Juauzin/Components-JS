class Cardnews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        // setando classes
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");

        const manchete = document.createElement("h1");
        manchete.textContent = this.getAttribute("title");

        const news = document.createElement("p");
        news.textContent = this.getAttribute("contet");
        //mostra que são "filhos" do component
        cardLeft.appendChild(autor);
        cardLeft.appendChild(manchete);
        cardLeft.appendChild(news);

        const cardRight = document.createElement("div");

        // setando classes
        cardRight.setAttribute("class", "card__right");
        const image = document.createElement("img");
        image.src = this.getAttribute("photo") || "assets/asset/download.jpeg";
        cardRight.appendChild(image);

        //mostra que são "filhos" do component
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    styles() {

        const style = document.createElement("style");
        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        }
        
        .card{
            width: 80%;
            box-shadow: 23px -17px 86px 6px rgba(0,0,0,0.4);
           -webkit-box-shadow: 23px -17px 86px 6px rgba(0,0,0,0.4);
           -moz-box-shadow: 23px -17px 86px 6px rgba(0,0,0,0.4);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        
        }
        .card__left > span{
            font-weight:400;
        
        }
        .card__left > h1{
            margin-top: 15px;
            font-size: 25px;
        }
        .card__left > p{
            color: gray;
        }
        `;
    
     
    return style; 
    }
}
customElements.define("card-news", Cardnews);   
