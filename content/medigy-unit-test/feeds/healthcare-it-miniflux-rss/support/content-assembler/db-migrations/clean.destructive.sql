-- drop in reverse dependency order
drop view if exists medigy_pca_industry_feeds_mf_feed_icons_health_it;
drop view if exists medigy_pca_industry_feeds_mf_entries_health_it;
drop view if exists medigy_pca_industry_feeds_mf_feeds_rule_health_it;
drop view if exists medigy_pca_industry_feeds_mf_categories_rule_health_it;
drop function if exists slugify;
drop function if exists prepare_file_name;
drop function if exists url_brand;