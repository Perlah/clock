
var button;
var c;
var c2;
var c3;
var song;

  /**
   * Same as `function setup() {}` before, but written a different way
   * using our namespace.
   */
function preload() {
  song = loadSound('music/Fast & Furious 7.mp3');
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // get things started

    button = createButton('PLAY');
    button.position(50, 65);
    //button.mousePressed(); glitch?

    c = color(255,0,0);
    c2 = color(192, 0, 0);
    c3 = color(128, 0, 0);

    //song = loadSound('music/Fast & Furious 7.mp3');
    //song.loop();

    // create a new Amplitude analyzer
    analyzer = new p5.Amplitude();
    analyzer.setInput(song);

    

    //p.5 gibber code
  //  createCanvas( windowWidth, windowHeight );

  /*  drums = EDrums( 'x*o*x*o-' );

    sampler = Sampler().record( drums, 1 )
      .note.seq( [.25,.5,1,2].rnd(), [1/4,1/8,1/2].rnd() )
      .fx.add( Delay(1/64))
      .pan.seq( Rndf(-1,1) );

    bass = Mono('bass')
      .note.seq( [0,7], 1/8 );

    Gibber.scale.root.seq( ['c4','eb4'], 1 );

    follow = Follow( Gibber.Master, 1024 );

    background( 64 );
    noFill();
    stroke( 10,0,0,127 );
*/


  }

  /**
   * Same as `function draw() {}` before, but written a different way
   * using our namespace.
   */
function draw() {
    // go!

    background(24, 0, 0);
    fill(c);
    var vol = analyzer.getLevel();
    ellipse(windowWidth/5, windowHeight/1.5, 0+vol*300, 10+vol*300);
    fill(c2);
    ellipse(windowWidth/5, windowHeight/5, 0+vol*200, 10+vol*200);
  //  fill(c3);
    //ellipse(windowWidth/5, windowHeight/1.5, 0+vol*150, 10+vol*150);


  /*  //p5.gibber
    var x = mouseX / windowWidth,
        y = mouseY / windowHeight,
        ww2 = windowWidth / 2,
        wh2 = windowHeight / 2,
        value = follow.getValue(),
        radius = ( ww2 > wh2 ? wh2 : ww2 ) * value;

    bass.resonance = (1 - x) * 5;
    bass.cutoff = (1 - y) / 2;

    sampler.fx[0].feedback = x < .99 ? x : .99;

    strokeWeight( value * 50 );
    background( 64,64,64,10 );
    ellipse( ww2, wh2, radius, radius );
*/
  }


		sketch.textSize(20);
		sketch.fill(255,255,255);
		sketch.noStroke();
		sketch.text(sketch.hour()+":"+sketch.minute()+":"+sketch.second(), 10, sketch.windowHeight-10);
	}


});
