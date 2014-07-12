otliam
======

A jQuery scraping-free mailto link generator. Spell it backwards!

Do you want to supply your email address on your website but, want to prevent it from being used by scraping bots which sell your email to spamming groups?

Well this is what this jQuery application is set out to prevent. Scraping bots read the source code of your site and using regular expressions to try and find email addresses. Even just putting your email as plain text is not safe. Scraping bots usually just read uncompiled source. So thats why I develop this jQuery application. It will take a link with no `href` value and parse out the data-fields to build your `mailto:` link.

Documentation
-------------
Add the following data fields to create your `mailto:` link.

<strong>data-pre=""</strong> - Required. This is everything before the @ symbol in the email address.

<strong>data-post=""</strong> - Required. This is everything after the @ symbol (usually the domain), excluding the domain extension. I have another attribute for that!

<strong>data-ext=""</strong> - Required. This is the domain extension like; com, net, org, ninja...etc (notice no leading period! I handle that for you.).

<strong>data-name=""</strong> - Optional. If you want to have the clickable link be custom. You can fill this with whatever you desire. If you leave it blank or undefined, it will default to the full email address. If you already put something between the `<a></a>` tag, that will take precedence.

<strong>data-subject=""</strong> - Optional. If you want to supply a subject line to the email. If left undefined the subject will be blank.

Usage
-----
	
<strong>Simple Example</strong>

	...
	// Setup the link
	<a data-pre="cory.akt" data-post="gmail" data-ext="com"></a>
	...
	// Include jQuery first
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" type="text/javascript"></script>
	//Include otliam, to watch the magic happen!
	<script src="otliam.min.js" type="text/javascript"></script>
	
<strong>Full Blown!</strong>

	<a data-pre="cory.akt" data-post="gmail" data-ext="com" data-name="Click me to send me an email!" data-subject="I use otliam to make my email scrape proof!"></a>

Examples
--------
I have included an example file in the repo to show you otliam's capabilities.




HAVE FUN!
=========