CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(26),
	password VARCHAR(255),
	description VARCHAR(500),
	profile_pic_dir VARCHAR(255),
	email VARCHAR(255),
	num_posts INT,
	num_likes INT,
	num_topics INT,
	timezone_off INT, -- Timezone offset
	is_moderator BOOLEAN,
	is_admin BOOLEAN,
	is_banned BOOLEAN
);