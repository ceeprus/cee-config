// user.js — drop this in your Firefox profile folder
// Settings here override prefs.js on every startup.

/*** CRITICAL — userChrome.css ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets",    true);
user_pref("svg.context-properties.content.enabled",                 true);  // icon themes

/*** TELEMETRY — all off ***/
user_pref("app.normandy.enabled",                                    false);
user_pref("app.normandy.api_url",                                    "");
user_pref("app.shield.optoutstudies.enabled",                        false);
user_pref("breakpad.reportURL",                                      "");
user_pref("browser.ping-centre.telemetry",                          false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry",     false);
user_pref("browser.newtabpage.activity-stream.telemetry",           false);
user_pref("browser.tabs.crashReporting.sendReport",                 false);
user_pref("datareporting.healthreport.uploadEnabled",               false);
user_pref("datareporting.policy.dataSubmissionEnabled",             false);
user_pref("datareporting.usage.uploadEnabled",                      false);
user_pref("default-browser-agent.enabled",                          false);
user_pref("toolkit.coverage.endpoint.base",                         "");
user_pref("toolkit.coverage.opt-out",                               true);
user_pref("toolkit.telemetry.archive.enabled",                      false);
user_pref("toolkit.telemetry.bhrPing.enabled",                      false);
user_pref("toolkit.telemetry.coverage.opt-out",                     true);
user_pref("toolkit.telemetry.firstShutdownPing.enabled",            false);
user_pref("toolkit.telemetry.newProfilePing.enabled",               false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun",             false);
user_pref("toolkit.telemetry.server",                               "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled",           false);
user_pref("toolkit.telemetry.unified",                              false);
user_pref("toolkit.telemetry.updatePing.enabled",                   false);

/*** AI / ML — all off ***/
user_pref("browser.ai.control.default",                             "blocked");
user_pref("browser.ai.control.linkPreviewKeyPoints",                "blocked");
user_pref("browser.ai.control.pdfjsAltText",                        "blocked");
user_pref("browser.ai.control.sidebarChatbot",                      "blocked");
user_pref("browser.ai.control.smartTabGroups",                      "blocked");
user_pref("browser.ai.control.translations",                        "blocked");
user_pref("browser.ml.chat.enabled",                                false);
user_pref("browser.ml.chat.menu",                                   false);
user_pref("browser.ml.chat.page",                                   false);
user_pref("browser.ml.chat.sidebar",                                false);
user_pref("browser.ml.enable",                                      false);
user_pref("browser.ml.linkPreview.enabled",                         false);
user_pref("extensions.ml.enabled",                                  false);
user_pref("pdfjs.enableAltText",                                    false);
user_pref("pdfjs.enableScripting",                                  false);

/*** PRIVACY & TRACKING ***/
user_pref("browser.contentblocking.category",                       "strict");
user_pref("privacy.annotate_channels.strict_list.enabled",          true);
user_pref("privacy.antitracking.isolateContentScriptResources",     true);
user_pref("privacy.bounceTrackingProtection.mode",                  1);
user_pref("privacy.fingerprintingProtection",                       true);
user_pref("privacy.globalprivacycontrol.enabled",                   true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled",          true);
user_pref("privacy.query_stripping.enabled",                        true);
user_pref("privacy.query_stripping.enabled.pbmode",                 true);
user_pref("privacy.query_stripping.strip_list",                     "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
user_pref("privacy.trackingprotection.emailtracking.enabled",       true);
user_pref("privacy.trackingprotection.enabled",                     true);
user_pref("privacy.trackingprotection.socialtracking.enabled",      true);
user_pref("privacy.userContext.enabled",                            true);
user_pref("privacy.userContext.ui.enabled",                         true);
user_pref("urlclassifier.features.socialtracking.skipURLs",         "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("urlclassifier.trackingSkipURLs",                         "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");

/*** SAFE BROWSING — disabled ***/
user_pref("browser.safebrowsing.downloads.enabled",                 false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon",  false);
user_pref("browser.safebrowsing.downloads.remote.enabled",         false);
user_pref("browser.safebrowsing.malware.enabled",                   false);
user_pref("browser.safebrowsing.phishing.enabled",                  false);

/*** LOGINS / FORMS — disabled ***/
user_pref("signon.rememberSignons",                                  false);
user_pref("signon.autofillForms",                                    false);
user_pref("signon.formlessCapture.enabled",                          false);
user_pref("signon.generation.enabled",                               false);
user_pref("signon.privateBrowsingCapture.enabled",                   false);
user_pref("signon.management.page.breach-alerts.enabled",           false);
user_pref("browser.formfill.enable",                                 false);
user_pref("extensions.formautofill.addresses.enabled",              false);
user_pref("extensions.formautofill.creditCards.enabled",            false);
user_pref("extensions.formautofill.heuristics.enabled",             false);

/*** SECURITY ***/
user_pref("dom.security.https_only_mode",                            true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
user_pref("network.IDN_show_punycode",                               true);
user_pref("security.OCSP.enabled",                                   0);
user_pref("security.csp.reporting.enabled",                          false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",         true);
user_pref("security.tls.enable_0rtt_data",                           false);
user_pref("xpinstall.signatures.required",                           false);

/*** WEBRTC — disable leak ***/
user_pref("media.peerconnection.enabled",                            false);
user_pref("media.peerconnection.ice.default_address_only",           true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy",     true);

/*** NETWORK ***/
user_pref("browser.cache.disk.enable",                               false);
user_pref("browser.places.speculativeConnect.enabled",               false);
user_pref("browser.urlbar.speculativeConnect.enabled",               false);
user_pref("captivedetect.canonicalURL",                              "");
user_pref("network.auth.subresource-http-auth-allow",                1);
user_pref("network.buffer.cache.count",                              128);
user_pref("network.captive-portal-service.enabled",                  false);
user_pref("network.connectivity-service.enabled",                    false);
user_pref("network.cookie.thirdparty.sessionOnly",                   true);
user_pref("network.dns.disablePrefetch",                             true);
user_pref("network.dns.disablePrefetchFromHTTPS",                    true);
user_pref("network.dnsCacheExpiration",                              3600);
user_pref("network.dnsCacheExpirationGracePeriod",                   240);
user_pref("network.file.disable_unc_paths",                          true);
user_pref("network.gio.supported-protocols",                         "");
user_pref("network.http.http3.enabled",                              false);
user_pref("network.http.max-connections",                            1800);
user_pref("network.http.max-persistent-connections-per-server",      10);
user_pref("network.http.referer.XOriginTrimmingPolicy",              2);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);
user_pref("network.http.speculative-parallel-limit",                 0);
user_pref("network.lna.blocking",                                    true);
user_pref("network.predictor.enable-prefetch",                       false);
user_pref("network.predictor.enabled",                               false);
user_pref("network.prefetch-next",                                   false);
user_pref("network.ssl_tokens_cache_capacity",                       32768);
user_pref("network.trr.mode",                                        5);  // disable DoH, use OS DNS

/*** GEO ***/
user_pref("geo.provider.ms-windows-location",                        false);
user_pref("geo.provider.network.url",                                "https://beacondb.net/v1/geolocate");
user_pref("geo.provider.use_corelocation",                           false);
user_pref("geo.provider.use_geoclue",                                false);
user_pref("geo.provider.use_gpsd",                                   false);
user_pref("permissions.default.camera",                              2);
user_pref("permissions.default.desktop-notification",                2);
user_pref("permissions.default.geo",                                 2);
user_pref("permissions.default.xr",                                  2);
user_pref("permissions.delegation.enabled",                          false);
user_pref("permissions.manager.defaultsUrl",                         "");

/*** EXTENSIONS ***/
user_pref("extensions.getAddons.cache.enabled",                      false);
user_pref("extensions.getAddons.showPane",                           false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled",     false);
user_pref("extensions.pocket.enabled",                               false);
user_pref("extensions.postDownloadThirdPartyPrompt",                 false);

/*** STARTUP / UI ***/
user_pref("accessibility.typeaheadfind.flashBar",                    0);
user_pref("browser.aboutConfig.showWarning",                         false);
user_pref("browser.aboutwelcome.enabled",                            false);
user_pref("browser.bookmarks.openInTabClosesMenu",                   false);
user_pref("browser.compactmode.show",                                true);
user_pref("browser.discovery.enabled",                               false);
user_pref("browser.download.alwaysOpenPanel",                        false);
user_pref("browser.download.manager.addToRecentDocs",               false);
user_pref("browser.download.open_pdf_attachments_inline",           true);
user_pref("browser.download.start_downloads_in_tmp_dir",            true);
user_pref("browser.menu.showViewImageInfo",                          true);
user_pref("browser.messaging-system.whatsNewPanel.enabled",         false);
user_pref("browser.preferences.moreFromMozilla",                     false);
user_pref("browser.privateWindowSeparation.enabled",                false);
user_pref("browser.privatebrowsing.enable-new-indicator",           false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache",          true);
user_pref("browser.privatebrowsing.vpnpromourl",                    "");
user_pref("browser.search.suggest.enabled",                          false);
user_pref("browser.search.update",                                   false);
user_pref("browser.sessionstore.interval",                           60000);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand",     true);
user_pref("browser.startup.homepage",                                "about:blank");
user_pref("browser.startup.homepage_override.mstone",               "ignore");
user_pref("browser.tabs.firefox-view",                               false);
user_pref("browser.tabs.groups.enabled",                             false);
user_pref("browser.tabs.groups.smart.enabled",                       false);
user_pref("browser.tabs.groups.smart.userEnabled",                   false);
user_pref("browser.tabs.hoverPreview.showThumbnails",               false);
user_pref("browser.tabs.loadBookmarksInTabs",                        true);
user_pref("browser.tabs.tabMinWidth",                                50);
user_pref("browser.tabs.tabmanager.enabled",                         false);
user_pref("browser.tabs.warnOnOpen",                                 false);
user_pref("browser.translations.automaticallyPopup",                false);
user_pref("browser.translations.enable",                             false);
user_pref("browser.uidensity",                                       1);
user_pref("browser.uitour.enabled",                                  false);
user_pref("browser.update.suppressPrompts",                          true);
user_pref("doh-rollout.disable-heuristics",                          true);
user_pref("dom.disable_window_move_resize",                          true);
user_pref("editor.truncate_user_pastes",                             false);
user_pref("findbar.highlightAll",                                    true);
user_pref("full-screen-api.transition-duration.enter",              "0 0");
user_pref("full-screen-api.transition-duration.leave",              "0 0");
user_pref("full-screen-api.warning.delay",                          -1);
user_pref("full-screen-api.warning.timeout",                        0);
user_pref("image.jxl.enabled",                                       true);
user_pref("intl.accept_languages",                                   "en,en-us");
user_pref("layout.word_select.eat_space_to_next_word",              false);
user_pref("nimbus.rollouts.enabled",                                 false);
user_pref("webchannel.allowObject.urlWhitelist",                     "");

/*** NEW TAB — cleaned up ***/
user_pref("browser.newtabpage.activity-stream.default.sites",                           "");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",          false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",        false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories",               false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites",                          false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks",    false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads",    false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket",       false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited",      false);
user_pref("browser.newtabpage.activity-stream.showSearch",                              false);
user_pref("browser.newtabpage.activity-stream.showSponsored",                           false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes",                false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites",                  false);
user_pref("browser.newtabpage.enabled",                              false);

/*** URL BAR ***/
user_pref("browser.urlbar.groupLabels.enabled",                      false);
user_pref("browser.urlbar.showSearchSuggestionsFirst",              false);
user_pref("browser.urlbar.suggest.engines",                          false);
user_pref("browser.urlbar.suggest.quicksuggest.all",                false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored",       false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored",          false);
user_pref("browser.urlbar.suggest.topsites",                         false);
user_pref("browser.urlbar.trending.featureGate",                    false);
user_pref("browser.urlbar.trimHttps",                                true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate",     true);

/*** PERFORMANCE ***/
user_pref("browser.cache.memory.max_entry_size",                     153600);
user_pref("content.notify.interval",                                 100000);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled",                true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",  650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",     25);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("gfx.canvas.accelerated.cache-items",                      32768);
user_pref("gfx.canvas.accelerated.cache-size",                      4096);
user_pref("gfx.content.skia-font-cache-size",                       80);
user_pref("image.cache.size",                                        10485760);
user_pref("image.mem.decode_bytes_at_a_time",                       131072);
user_pref("image.mem.shared.unmap.min_expiration_ms",               120000);
user_pref("media.cache_readahead_limit",                             9000);
user_pref("media.cache_resume_threshold",                            6000);
user_pref("media.memory_cache_max_size",                             65536);
user_pref("media.memory_caches_combined_limit_kb",                  2560000);
user_pref("mousewheel.default.delta_multiplier_y",                  230);
user_pref("nglayout.initialpaint.delay",                             0);
user_pref("nglayout.initialpaint.delay_in_oopif",                   0);
