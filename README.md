<img src="img/icone.jpg" style="width:20px" >

# Tic-Tac
Put a deadline for payment on a project that you have coded or put a deadline to be called each time for system maintenance XP **[Am not responsible in the bad use of this project]**

## How it work?
A date format and a deadline are given in parameter to the system TicTac which evaluates whether or not the deadline has already arrived or not. If so then it hides the style and script of the page of the visitor momentarily for an unreadable rendition so that we do not call the developer again

## How to use it:
```html
<!DOCTYPE html>
<html>
<head>
	<title>A webpSite</title>
</head>
	<body>

		...

		<!-- Put these few lines of code in your website or hide it in a script -->
		<script src="https://rawgit.com/Sanix-Darker/Tic-Tac/master/js/tictac.min.js"></script>
		<script type="text/javascript">

			var tictac_options = [
									'en', // Date format (en, fr)
									'04/06/2018' // Date (en:Month/Day/Year  fr: Day/Month/Year)
								];
			checkDate(tictac_options[1], true);// Display a white Screen (true, false)

		</script>

	</body>
</html>

```

### Authors / Contributors:
<a href="https://github.com/Sanix-Darker">> Sanix Darker </a>

### Captures before and after the dead line with Tic-Tac:
<table style="width: 100%;">
	<tr>
		<td style="width: 50%">
			<img src="img/capture.PNG" >
		</td>
		<td >
			<img src="img/capture1.PNG" >
		</td>
	</tr>
</table>

**Tic Tac affect any files in your website juste the user render**