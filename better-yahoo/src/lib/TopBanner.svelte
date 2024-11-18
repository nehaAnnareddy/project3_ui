<script>
    import Siema from 'siema';
    import { onMount } from 'svelte';

    let slider, prev, next, radioSlider;
    let select = 0;

    export let data = [
        {
            src: "/images/img4.png",
            title: "Fire Weather Watch and Wind Advisory issued for Hawaii",
            description: "The National Weather Service has issued both a Fire Weather Watch and a Wind Advisory for several areas of Hawaii, with strong winds and low humidity expected to create hazardous conditions on Friday, Nov. 15.",
            author: "Lucy Lopez",
            Link: "https://www.yahoo.com/news/fire-weather-watch-wind-advisory-024857099.html"
        },
        {
            src: "/images/img1.png",
            title: "Trump To Nominate Tulsi Gabbard As Director Of National Intelligence",
            description: "President-elect Donald Trump has named former Rep. Tulsi Gabbard as his pick for director of national intelligence, praising the former Democrat as 'now a proud Republican.'",
            author: "Lydia O'Connor",
            Link: "https://www.yahoo.com/news/trump-nominate-tulsi-gabbard-director-201958380.html"
        },
        {
            src: "/images/img2.png",
            title: "Chargers score in final minute to spoil wild Bengals' comeback",
            description: "Cincinnati rallied from a 27-6 deficit to tie the game, but Evan McPherson missed two field goals and J.K. Dobbins raced 29 yards for the go-ahead TD.",
            author: "Frank Schwab",
            Link: "https://sports.yahoo.com/live/bengals-chargers-justin-herbert-leads-winning-drive-after-la-blew-a-21-point-lead-to-beat-cincinnati-34-27-000001763.html"
        },
        {
            src: "/images/img3.png",
            title: "Gold Loses Some Luster After Trump’s Decisive Win",
            description: "Donald Trump’s victory immediately buoyed markets from stocks to Bitcoin. Gold is going to take a lot longer to turn things around. In the two days immediately following the Republican candidate’s win...",
            author: "Yvonne Yue Li and Sybilla Gross",
            Link: "https://www.yahoo.com/finance/news/gold-loses-luster-trump-decisive-150018236.html"
        },
    ];

    onMount(() => {
        slider = new Siema({
            selector: '.siema',
            duration: 200,
            easing: 'ease-in-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true,
            rtl: false,
            onChange: () => {
                // Update the `select` variable to match the current slide index
                select = slider.currentSlide;
            }
        });

        prev = () => {
            slider.prev();
            if (select > 0) {
                select--;
            }
        };

        next = () => {
            slider.next();
            if (select < data.length - 1) {
                select++;
            }
        };
    });
</script>

<div class="siema">
    {#each data as d}
        <div class="slider">
            <div class="grayBox">
                <a href={d.Link} target="_blank" rel="noopener noreferrer" on:click|stopPropagation>
                    <h1>{d.title}</h1>
                </a>
                <p>{d.description}</p>
                <p class="author"><strong>Author:</strong> {d.author}</p>
            </div>
            <img src={d.src} alt={d.alt} />
        </div>
    {/each}
</div>

<div class='bullet'>
    {#each data as d, i}
        <input 
            bind:this={radioSlider}
            type="radio" 
            id={i} 
            name="slider-radio" 
            value={i}
            checked={select == i}
            on:click={() => { slider.goTo(i); select = i; }}
        >
    {/each}
</div>


    <!-- <button on:click={prev}>
        prev
    </button>
    <button on:click={next}>
        next
    </button> -->

    <style>

        a {
            text-decoration: none; 
            color: inherit; 
            transition: color 0.3s ease; 
        }

        a:hover {
            color: #6001d2; 
            text-decoration: underline;
        }

        .grayBox {
                width: 400px;
                height: auto;
                margin: 20px 30px;
                display: flex;
                flex-direction: column;

            }

        .grayBox h2{
            margin-top:0px;
            font-size: 27px;
            margin-bottom:0px;
        }
        .grayBox p{
            font-size: 18px;
            margin-top:10px;
            text-overflow: ellipsis;
        }

        .author{
            margin-top: 20px;
        }
        .slider {
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.133) 70%, rgba(80, 21, 176, 0.267) 100%);
            height:450px;
            margin:20px 40px;
            margin-bottom: 30px;
            display:flex;
            border-radius: 8px;
            /* justify-content:center;
            align-items:center; */
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px -1px inset, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
        .slider img{
            width: 700px;
            height: 450px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;;
        }
        .bullet {
            width:100%;
            display:flex;
            justify-content:center;
        }
        input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;

            border-radius: 50%;
            width: 8px;
            height: 8px;
            
            background-color:lightgrey;
            transition: 0.2s all linear;
            margin-right: 5px;

            position: relative;
            top: 4px;
        }
        input:checked {
            background-color:grey;
        }
    </style>








