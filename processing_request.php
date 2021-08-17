
<?php $cpalink= "https://re-skinning.com" ?>

<!-- ================================================================= -->
<!-- ================================================================= -->
<!-- =============== By MCh CPA 2021 : Re-skinning GRP =============== -->
<!-- ================================================================= -->
<!-- ================================================================= -->
<?php include("php/header.php"); ?>
		<div class="content-wrapper generator-content-wrapper">				
			<div class="row">
				<div class="profile-form-wrapper col-sm-12">
					<?php	
						$tik_user = $user = isset($_GET['username']) ? $_GET['username'] : "null";
						$ytbdata = 'https://brainans.com/user/'.$tik_user;
						$url = file_get_contents($ytbdata);
						$dom = new DOMDocument();
						libxml_use_internal_errors(true);
						$dom->loadHTML($url);
						libxml_clear_errors();
						$xpath = new DOMXpath($dom);
						$values = array();
							$full_name = $xpath->query("//div[@class='user__title']/h4");
							foreach($full_name as $value) {
								$full_name = $values[] = trim($value->textContent);
							}
							$user_name = $xpath->query("//div[@class='user__title']/a/h1");
							foreach($user_name as $value) {
								$user_name = $values[] = trim($value->textContent);
							}
							$followers = $xpath->query("//ul[@class='list']/li[@class='list__item'][2]/strong");
							if (!empty($followers)) {
								foreach($followers as $value) {
									$followers = $values[] = trim($value->textContent);
									if(strpos($followers, 'M') !== false){
										$followers = str_replace('M', '', $followers);
										$followers *= 1000000;	
									}elseif(strpos($followers, 'k') !== false){
										$followers = str_replace('k', '', $followers);
										$followers *= 1000;	
									}else{
										$followers = $followers;
									}
								}	
							}else{
								$followers = '0';
							}
							$following = $xpath->query("//ul[@class='list']/li[@class='list__item'][3]/strong");
							if (!empty($following)) {
								foreach($following as $value) {
									$following = $values[] = trim($value->textContent);
									$following = str_replace(",","",$following);
								}	
							}else{
								$following = '0';
							}							
							$videos = $xpath->query("//li[@class='list__item'][1]/strong");
							foreach($videos as $value) {
								$video = $values[] = $value->textContent;
							}
							$likes = $xpath->query("//li[@class='list__item'][4]/strong");
							foreach($likes as $value) {
								$likes = $values[] = $value->textContent;
							}
							$image = $xpath->query("//div[@class='col-md-3 col-4 my-3']/div[@class='user__img']/@style");
							foreach($image as $value) {
								$image = $values[] = $value->textContent;
							}
					// ================================================================= //
					// ================================================================= //
					// =============== By MCh CPA 2021 : Re-skinning GRP =============== //
					// ================================================================= //
					// ================================================================= //
					if (strlen($full_name != 0)) { ?>
						<div class="processing-wrapper-not-connected">
							<div class="processing-inner-wrapper">
								<div class="cssload-dots">
									<div class="cssload-dot"></div>
									<div class="cssload-dot"></div>
									<div class="cssload-dot"></div>
									<div class="cssload-dot"></div>
									<div class="cssload-dot"></div>
								</div>
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
									<defs>
										<filter id="goo">
											<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" ></feGaussianBlur>
											<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo" ></feColorMatrix>
											<!--<feBlend in2="goo" in="SourceGraphic" result="mix" ></feBlend>-->
										</filter>
									</defs>
								</svg>
								<p class="animated infinite jello">Retrieving Profile Info...</p>
							</div>
						</div>
						<div class="error-message">
							<i class="fa fa-times-circle-o" aria-hidden="true"></i>
							<h1>Oops, error</h1>
							<div class="error-message-notice">It seems you entered an invalid TikTok Channel Link!</div>
							<div class="error-button-wrapper"><a id="error-go-back-button" class="error-button-back ig-button small">Go Back</a></div>
						</div>							
					<?php }else{ ?>
						<div class="processing-wrapper">
							<div class="processing-inner-wrapper">
								<div class="cssload-dots">
									<div class="cssload-dot"></div>
									<div class="cssload-dot"></div>
									<div class="cssload-dot"></div>
									<div class="cssload-dot"></div>
									<div class="cssload-dot"></div>
								</div>
								<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
									<defs>
										<filter id="goo">
											<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" ></feGaussianBlur>
											<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo" ></feColorMatrix>
										</filter>
									</defs>
								</svg>
								<p class="animated infinite jello">Retrieving Profile Info...</p>
							</div>
						</div>
						<div class="processing-second-step">
							<div class="profile-info-wrapper">
								<div class="profile-info-content-wrapper">
									<div class="row profile-info-row">
										<div class="profile-img-wrapper col-xs-3">
											<div class="flip-container">
												<div class="card">
													<div class="profile-picture-img front img-responsive" style="<?php echo $image; ?> background-size: 115px 115px;"></div>
													<div class="profile-picture-img back img-responsive" style="<?php echo $image; ?> background-size: 115px 115px;"></div>
												</div>
											</div>							
										</div>
										<div class="profile-info-field-username col-xs-9">
											<div class="profile-info-username"><?php echo $full_name;  ?> (<span id="console-username-val"><?php echo $user_name;  ?></span>)</div>
											<span class="profile-info-blok">
												<span id="current-followers-value" class="profile-info-content"><?php echo $followers;  ?></span>
												<span class="profile-info-label"> Followers</span><span class="profile-info-separator">•</span>	
											</span>	
											<span class="profile-info-blok">
												<span class="profile-info-content"><?php  echo $following; ?></span>
												<span class="profile-info-label"> Following</span><span class="profile-info-separator">•</span>
											</span>
											<span class="profile-info-blok">
												<span class="profile-info-content"><?php  echo $likes; ?></span>
												<span class="profile-info-label"> Likes</span><span class="profile-info-separator">•</span>
											</span>
											<span class="profile-info-blok videos">				
												<span class="profile-info-content"><?php  echo $video; ?></span>
												<span class="profile-info-label"> Videos</span>									
											</span>	
										</div>
									</div>
									<div class="go-back-wrapper">Wrong profile? <span id="go-back">Go back</span></div>
								</div>
							</div>
							<div class="amount-of-followers-selection-wrapper">
								<h3>Amount of followers</h3>
								<div class="row amount-of-followers-selection-row">	
									<div class="amount-of-followers-selection-item-wrapper col-xs-4 amount-of-followers-selection-item-wrapper-1">	
										<div class="amount-of-followers-selection-item amount-of-followers-selection-item-1">	
											<img class="followers-amount-selection-img img-responsive" alt="1000 followers" src="img/followers-selection-1.png"/>		
											<div class="amount-of-followers-selection-item-value"><span>1000</span>followers</div>
										</div>
									</div>
									<div class="amount-of-followers-selection-item-wrapper col-xs-4 amount-of-followers-selection-item-wrapper-2">	
										<div class="amount-of-followers-selection-item amount-of-followers-selection-item-2">	
											<img class="followers-amount-selection-img img-responsive" alt="2500 followers" src="img/followers-selection-2.png"/>		
											<div class="amount-of-followers-selection-item-value"><span>2500</span>followers</div>
										</div>
									</div>
									<div class="amount-of-followers-selection-item-wrapper col-xs-4 amount-of-followers-selection-item-wrapper-3">	
										<div class="amount-of-followers-selection-item amount-of-followers-selection-item-3">	
											<img class="followers-amount-selection-img img-responsive" alt="5000 followers" src="img/followers-selection-3.png"/>		
											<div class="amount-of-followers-selection-item-value"><span>5000</span>followers</div>
										</div>
									</div>
								</div>
								<button type="submit" id="add-followers-button" class="add-followers-button ig-button" >Add followers</button>
							</div>
							<div id="adding-followers-console-notice-wrapper" class="adding-followers-console-notice-wrapper mfp-hide">
								<div class="adding-followers-console-notice-inner-wrapper">
									<div class="adding-followers-console-notice-header">
										<img class="console-notice-logo img-responsive" alt="IG Logo Small" width="300" src="img/logo-dark-small.png" />
										<br>
										<h4>TikTok followers Generator</h4>
									</div>
									<div class="adding-followers-console-notice-content">
										<p class="console-notice-info-line">
											You are about to add
											<strong><span id="console-notice-followers-value"></span> followers</strong> to TikTok account 
											<strong><span id="console-notice-account"><?php echo $user_name; ?></span></strong>
										</p>
										<span class="img-responsive console-notice-reski" style="<?php echo $image; ?>; background-size: 80px 80px; width:80px; height:80px;" ></span>
										<p>This will increase the amount of followers to <strong><span id="console-notice-followers-new-value"></span></strong></p>
									</div>
									<div class="console-notice-button-wrapper">
										<button type="submit" id="generate-followers-button" class="generate-followers-button ig-button" >Sure, go ahead!</button>
										<p><br></p>
										<a id="console-notice-go-back">No, I changed my mind</a>
									</div>
								</div>
							</div>
							<div class="adding-followers-console-animation-wrapper">
								<div class="adding-followers-console-animation">
									<div class="cssload-dots-2">
										<div class="cssload-dot"></div>
										<div class="cssload-dot"></div>
										<div class="cssload-dot"></div>
										<div class="cssload-dot"></div>
										<div class="cssload-dot"></div>
									</div>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
										<defs>
											<filter id="goo2">
												<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" ></feGaussianBlur>
												<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo" ></feColorMatrix>
											</filter>
										</defs>
									</svg>
								</div>
							</div>
							<div class="adding-followers-console-wrapper">
								<div class="adding-followers-console-row">	
									<div class="adding-followers-console-inner-wrapper">											
										<div class="adding-followers-console">	
											<div class="adding-followers-console-content">
												<div id="fountainG">
													<div id="fountainG_1" class="fountainG"></div>
													<div id="fountainG_2" class="fountainG"></div>
													<div id="fountainG_3" class="fountainG"></div>
													<div id="fountainG_4" class="fountainG"></div>
													<div id="fountainG_5" class="fountainG"></div>
													<div id="fountainG_6" class="fountainG"></div>
													<div id="fountainG_7" class="fountainG"></div>
													<div id="fountainG_8" class="fountainG"></div>
												</div>
												<div id="console-new-followers">
													<span id="console-new-followers-label">followers:</span>
													<span class="console-profile-picture-img img-responsive" style="<?php echo $image; ?>; background-size: 45px 45px; width:50px; height:50px;" ></span>
													<span id="console-new-followers-value"><?php $followers; ?></span>
												</div>
												<span class="console-message">Loading generator files...</span>
											</div>
											<div id="progressBarConsole" class="console-loadbar"><div></div></div>
										</div>
									</div>
								</div>								
							</div>
							<div class="human-verification-wrapper">
								<div class="human-verification-inner-wrapper">
									<h3>Human Verification</h3>
									<p>To prevent robot abuse of our generator, you are required to complete the human verification by clicking the button below.</p>
									<div id="fountainG">
										<div id="fountainG_1" class="fountainG"></div>
										<div id="fountainG_2" class="fountainG"></div>
										<div id="fountainG_3" class="fountainG"></div>
										<div id="fountainG_4" class="fountainG"></div>
										<div id="fountainG_5" class="fountainG"></div>
										<div id="fountainG_6" class="fountainG"></div>
										<div id="fountainG_7" class="fountainG"></div>
										<div id="fountainG_8" class="fountainG"></div>
									</div>
									<div class="human-verification-button-wrapper">
										<a href="<?php echo $cpalink; ?>" id="human-verification-button" class="human-verification-button ig-button">Verify Now</a>
									</div>
								</div>
							</div>
						</div>
					<?php } ?>
				</div>		
			</div>							
		</div>	
		<div class="bg-detail"><img src="img/bg.png" /></div>
		<?php include 'php/parts.php';?>
	</div>
<?php include 'php/footer.php';?>  
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript" src="js/sweet-alert.min.js"></script>
    <script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>
    <script type="text/javascript" src="js/jquery.fitvids.js"></script>    
    <script type="text/javascript" src="js/validator.min.js"></script>
    <script type="text/javascript" src="js/jquery.matchHeight-min.js"></script>
    <script type="text/javascript" src="js/com.js"></script>
    <script type="text/javascript" src="js/sticky.js"></script>
    <script type="text/javascript" src="js/form-scripts.js"></script>
    <script type="text/javascript" src="js/jquery.countTo.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
	<?php if (strlen($full_name != 0)) { ?>
		<script type="text/javascript" src="js/processing-request-not-connected.js"></script>				
	<?php }else { ?>
		<script type="text/javascript" src="js/processing-request.js"></script>	
	<?php } ?>
	<?php if(preg_match($regex_pattern, $TikTok_url)){ ?>
		<script type="text/javascript" src="js/processing-request-not-connected.js"></script>	
	<?php } ?>
	<script> 
		document.onkeydown = function(e) {
			if(event.keyCode == 123) {
				return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
				return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
				return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
				return false;
			}
			if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
				return false;
			}
		}
	</script>
</body>
</html>
<!-- ================================================================= -->
<!-- ================================================================= -->
<!-- =============== By MCh CPA 2021 : Re-skinning GRP =============== -->
<!-- ================================================================= -->
<!-- ================================================================= -->