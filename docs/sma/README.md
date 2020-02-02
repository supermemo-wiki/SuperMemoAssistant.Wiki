<script>
const siema = new Siema({
	selector: '.siema',
	duration: 250,
	loop: true,
});

setInterval(() => siema.next(), 5000);
</script>

# Welcome to SuperMemo Assistant wiki!

#### What is it?

**SuperMemo Assistant** supercharges your [*SuperMemo*](https://super-memo.com/supermemo18.html) with powerful features:

<div class="pure-g" style="margin-top: -20px;">
  <div class="pure-u-1 pure-u-smd-3-4">
    <blockquote>
      <ul>
        <li>Do you want to incrementally read <strong>PDF</strong> files ?</li>
    	<li>Would <strong>Chrome</strong> or <strong>Firefox</strong> be more convenient to import web articles ?</li>
    	<li>Do you need <strong>LaTeX</strong> to display scientific formulas ?</li>
    	<li>Or to quickly lookup word definitions from the <strong>dictionary</strong> ?</li>
      </ul>
    </blockquote>
    <p>You can now do all of this <em>and more</em>, right in SuperMemo !</p>
  </div>
  <div class="pure-u-1 pure-u-smd-1-4">
    <img src="content/images/icons/robot-128.png" style="margin: auto;" />
  </div>
</div>

<div class="pure-g" style="margin-top: -10px;">
  <div class="pure-u-1 pure-u-smd-13-24">
    <p style="color: darkred;"><strong>Get started with <u>SMA in 5 minutes</u> (really)</strong>:</p>
	<ol>
      <li><a href="https://github.com/supermemo/SuperMemoAssistant/releases" target="_blank" rel="noopener">Download</a> the latest version</li>
      <li><a href="#/qs-installation">Install SMA</a></li>
      <li><a href="#/qs-pdf-and-browser-101">Import PDF and Browser tabs</a></li>
	</ol>
	<p>Additional resources:</p>
	<ul>
      <li><a href="https://discord.gg/B2AWHPn" target="_blank" rel="noopener">Discord</a> chat room</li>
      <li><a href="https://github.com/SuperMemo/" target="_blank" rel="noopener">GitHub page</a></li>
      <li><a href="https://www.supermemo.wiki" target="_blank" rel="noopener">SuperMemo documentation</a> (WIP)</li>
	</ul>
    <p id="supported-versions"><strong>Supported SM versions</strong>: <em>17.40</em> ; <em>18.03</em>.</p>
  </div>
  <div class="pure-u-1 pure-u-smd-11-24">
	<div class="center-div">
      <video controls>
        <source src="content/videos/images-multipleocrinline.gif-vp9-750k.webm" type="video/webm; codecs=vp9">
        <!--source src="content/videos/big-buck-bunny_trailer.mp4" type="video/mp4"-->
        <p>Your browser doesn't support HTML5 video. Here is a <a href="big-buck-bunny_trailer.mp4">link to the video</a> instead.</p>
      </video>
	</div>
  </div>
</div>

<hr />

#### Features

<div class="pure-g">
  <div class="pure-u-1 pure-u-smd-1-2 ph-4">
    <div class="card">
      <h4><a href="plugin-PDF">PDF Support</a></h4>
	  <ul>
	  <li>Extract text, images & snapshots</li>
	  <li>Built-in OCR (formulas & text)</li>
	  <li>Built-in Dictionary</li>
	  <li>Text format is preserved</li>
	  <li>Extract them all at once</p>
	  <ul>
    </div>
    <div class="card">
      <h4><a href="plugin-LaTeX">LaTeX</a></h4>
	  <ul>
	    <li>Render & edit LaTeX in SuperMemo</li>
	    <li>Several display formats by default</li>
	    <li>Fully customizable</li>
	  </ul>
    </div>
    <div class="card">
      <h4><a href="#">Community plugins</a></h4>
	  <ul>
	    <li>Create your own plugins & publish them</li>
	    <li>Developer documentation</li>
	    <li>Clone the plugin template to quickly get started</li>
	  </ul>
    </div>
  </div>
  <div class="pure-u-1 pure-u-smd-1-2 ph-4">
    <div class="card">
      <h4><a href="plugin-Import">Web Import</a></h4>
	  <ul>
	    <li>Import tabs from Chrome, Firefox, ..</li>
	    <li>Import feeds (RSS, Atom)</li>
	    <li>Customize each website:
		  <ul>
		    <li>Destination element in your KT</li>
		    <li>Filter content (XPath, Regex)</li>
		    <li>Custom references (title, date, ...)</li>
		    <li>Cookies</li>
		    <li>... & more</li>
		  </ul>
		</li>
		<li>Integrable in your own plugins</li>
	  </ul>
    </div>
    <div class="card">
      <h4><a href="plugin-Dictionary">Dictionary</a></h4>
	  <ul>
	    <li>Lookup word definitions in SuperMemo</li>
	    <li>Multi-lingual</li>
	    <li>Extract word definitions</li>
		<li>Customize extract format and content (Mustache)</li>
	    <li>Integrates with PDF</li>
		<li>Integrable in your own plugins</li>
	  </ul>
    </div>
  </div>
</div>

<hr/>

⚠️ **Tip**: Have you setup a [backup solution](backup-setup.md) for SuperMemo ? [Testimonies](backup-setup.md#testimonies) of users who found out too late:

<blockquote class="siema" style="margin: 0;">
  <div>Luke Avedon: “Back up your collection.  I'm ashamed to admit I used to never back up my collection.  Once while running a quick, 'repair collection' I lost power.  An entire section of my knowledge tree was mangled forever.  All the references changed to strange, incomprehensible characters.  Now I know better.  I automatically back up to two local hard drives, and three cloud drives each day.”</div>
  <div>Nour: “Well, I'm a bit new to SM and although I was warned, I did not understand the gravity of the warnings. Back-up your collection. Since I'm new, I don't understand a lot of the issues, but I know I didn't do anything to provoke them, and yet the combination of SM and my virtual machine had corrupted and misplaced files and needed to be repaired – with the repairs yielding some unwanted adjustments to my collection. Of course, if all your final prep is on SM, you'd be having heart palpitations at the thought of your collection getting messed up, I know I was. Sufficed to say lesson learned. The hard way, but learned never-the-less.”</div>
  <div>Rick Doe: “Insert a testimony here (3)”</div>
  <div>Niko Doe: “Insert a testimony here (4)”</div>
</blockquote>
