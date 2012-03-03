<h1>jQuery alignTo Plugin</h1>
<p>This plugin aligns an absolutely positioned layer relative to another. You can choose which corner of the layer to align to the target's which corner.</p>
<h2>Syntax</h2>
<pre><code>$(layer).alignTo(target, { options });</code></pre>
<ul>
	<li><code>target</code> selector or jQuery element 
	<li><code>gap</code> the distance between the two elements' edges</li>
</ul>
<h5>options</h5>
<ul>
	<li><code>posX</code>, <code>posY</code> reference point of the element to be aligned 
<code>0 = ALIGN_LEFT</code> | <code>1 = ALIGN_CENTER</code> | <code>2 = ALIGN_RIGHT</code>, 
<code>0 = ALIGN_TOP</code> | <code>1 = ALIGN_MIDDLE</code> | <code>2 = ALIGN_BOTTOM</code></li>
	<li><code>toX</code>, <code>toY</code> reference point of the target element ( the same as above )</li>
</ul>
<h2>Demo</h2>
<p><a href="http://lazaworx.com/static/alignto-plugin/sample.html">http://lazaworx.com/static/alignto-plugin/sample.html</a></p>
<h2>Usage</h2>
<pre><code>// The tooltips to position
<div class="tooltip">1</div>
<div class="tooltip">2</div>
<div class="tooltip">3</div>

// The targets to align to
<div class="targets">
	<span>(default)</span>
	<span>this left / middle<br>to right / middle</span>
	<span>this right / top<br>to center / bottom<br>gap = 0</span>
</div>

<script src="alignto.js"></script>
<script>
	$(document).ready(function() {
	
		// Using the defaults
		$('.tooltip:first').alignTo('.targets > span:first');
		
		// Aligning the left middle point to the target's right middle 
		$('.tooltip:nth(1)').alignTo('.targets > span:nth(1)', {
		    posX: ALIGN_LEFT, 
			posY: ALIGN_MIDDLE,
    		toX: ALIGN_RIGHT,
    		toY: ALIGN_MIDDLE
		});
		
		// Aligning the right top corner to the target's center bottom
		$('.tooltip:last').alignTo('.targets > span:last', {
		    posX: ALIGN_RIGHT,
			posY: ALIGN_TOP,
    		toX: ALIGN_CENTER, 
    		toY: ALIGN_BOTTOM,
			gap: 0
		});
	});
</script>
</code></pre>
<h2>Requirements</h2>
<p><a href="http://docs.jquery.com/Downloading_jQuery">jQuery 1.7 or higher</a></p>
<h2>License</h2>
<p>Available for use in all personal or commercial projects under both <a href="MIT-LICENSE.txt">MIT</a> and <a href="GPL-LICENSE.txt">GPL licenses</a>.</p>
<p>Copyright (c) 2012 <a href="http://lazaworx.com">Molnar Laszlo</a></p>
