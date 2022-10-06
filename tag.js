<script type="application/ld+json" class="seo-schema-graph">
	    {
	        "@context": "https://schema.org",
	        "@graph": [
                {
	                "@type": "Organization",
	                "@id": "<?php echo $linksite; ?>/#organization",
	                "name": "<?php echo $linksite->name; ?>",
	                "url": "<?php echo $linksite; ?>",
	                "sameAs": [
                        <?php 
                        echo 
                        '"https://twitter.com/'.$linksite->setting_twitter.'",'.
                        '"https://www.youtube.com/'.$linksite->setting_youtube.'",'.
                        '"https://www.facebook.com/'.$linksite->setting_facebook.'",'.
                        '"https://telegram.com/'.$linksite->setting_telegram.'",'.
                        '"https://instagram.com/'.$linksite->setting_instagram.'",'.
                        '"https://linkedin.com/'.$linksite->setting_linkedin.'"';?>
						],
	                "logo": {
	                    "@type": "ImageObject",
	                    "inLanguage": "en-US",
	                    "@id": "<?php echo $linksite; ?>/#/schema/logo/image/",
	                    "url": "<?php echo $linksite; ?>/public/uploads/images/<?php echo $linksite->setting_logo; ?>",
	                    "contentUrl": "<?php echo $linksite; ?>/public/uploads/images/<?php echo $linksite->setting_logo; ?>",
	                    "caption": "<?php echo $linksite->setting_name ?>"
	                },
	                "image": {
	                    "@id": "<?php echo $linksite; ?>/#/schema/logo/image/"
	                },
	                "description": "<?php echo $linksite->setting_description ?>",
	                "alternateName": "<?php echo $linksite->setting_name ?>",
	                "legalName": "<?php echo $linksite->setting_name ?>",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "<?php echo $linksite->setting_address ?>"
					},
					"email": "<?php echo $linksite->setting_email ?>",
					"contactPoint" : [
						{ "@type" : "ContactPoint",
						"telephone" : "<?php echo $linksite->setting_phone ?>",
						"contactType" : "customer service",
						"areaServed" : ["US"],
      					"availableLanguage" : ["English","Vietnammese"]
						} 
					],
					"keywords":"<?php echo $linksite->setting_keyword ?>"
	            },

	            {
	                "@type": "WebSite",
	                "@id": "<?php echo $linksite; ?>/#website",
	                "url": "<?php echo $linksite; ?>",
	                "name": "<?php echo $linksite->setting_name ?>",
	                "description": "<?php echo $linksite->setting_description ?>",
	                "publisher": {
	                    "@id": "<?php echo $linksite; ?>/#organization"
	                },
	                "inLanguage": "en-US",
	                "copyrightHolder": {
	                    "@id": "<?php echo $linksite; ?>/#organization"
	                }
	            }, 
				{
	            "@type": "ImageObject",
	            "inLanguage": "en-US",
	            "@id": "<?php echo $linksite; ?>/#primaryimage",
							"url": "<?php echo $linksite ?>/img/feature.png",
	            			"contentUrl": "<?php echo $linksite ?>/img/feature.png",
							"width": "600px" ,
	            "height": "300px"
	        }
	        ]
	    }
	</script>
