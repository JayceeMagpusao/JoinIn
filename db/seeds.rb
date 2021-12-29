# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# destroy all
User.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all

# seed database with users, posts, comments, and likes
# require_relative './seeds/users.rb'
# require_relative './seeds/posts.rb'
# require_relative './seeds/likes.rb'
# require_relative './seeds/comments.rb'

# users for seeding db
user1 = User.create!(first_name: "Demo", last_name: "User", email: "demo_user@hireme.com", company_name: "Your Company",
industry_type: "Computer Software", password: "123456", start_date: Date.new(2022, 1, 1), end_date: Date.new(2039, 12, 31), job_title: "Software Engineer")

user2 = User.create!(first_name: "Appa", last_name: "Mag", email: "appa_mag@hireme.com", company_name: "Your Company",
industry_type: "Computer Software", password: "123456", start_date: Date.new(2022, 1, 1), end_date: Date.new(2039, 12, 31), job_title: "Software Engineer")

user3 = User.create!(first_name: "Zuko", last_name: "Mag", email: "zuko_mag@hireme.com", company_name: "Your Company",
industry_type: "Computer Software", password: "123456", start_date: Date.new(2022, 1, 1), end_date: Date.new(2039, 12, 31), job_title: "Software Engineer")

user4 = User.create!(first_name: "Katara", last_name: "Mag", email: "katara_mag@hireme.com", company_name: "Your Company",
industry_type: "Computer Software", password: "123456", start_date: Date.new(2022, 1, 1), end_date: Date.new(2039, 12, 31), job_title: "Software Engineer")

user5 = User.create!(first_name: "Aang", last_name: "Mag", email: "aang_mag@hireme.com", company_name: "Your Company",
industry_type: "Computer Software", password: "123456", start_date: Date.new(2022, 1, 1), end_date: Date.new(2039, 12, 31), job_title: "Software Engineer")

user6 = User.create!(first_name: "Sokka", last_name: "Mag", email: "sokka_mag@hireme.com", company_name: "Your Company",
industry_type: "Computer Software", password: "123456", start_date: Date.new(2022, 1, 1), end_date: Date.new(2039, 12, 31), job_title: "Software Engineer")

user7 = User.create!(first_name: "Toph", last_name: "Mag", email: "toph_mag@hireme.com", company_name: "Your Company",
industry_type: "Computer Software", password: "123456", start_date: Date.new(2022, 1, 1), end_date: Date.new(2039, 12, 31), job_title: "Software Engineer")

user8 = User.create!(first_name: "Momo", last_name: "Mag", email: "momo_mag@hireme.com", company_name: "Your Company",
industry_type: "Computer Software", password: "123456", start_date: Date.new(2022, 1, 1), end_date: Date.new(2039, 12, 31), job_title: "Software Engineer")

# posts for seeding db
post1 = Post.create!(body: "There is no magic to achievement. It's all about hardwork and 
dedication", author_id: user6.id) 

post2 = Post.create!(body: "If you are looking for a job. Let me know how I can help.", 
author_id: user4.id) 

post3 = Post.create!(body: "Lost my job of over 20 years. Decided to hit the books and 
learn some new skills. Now I am in the market for software engineering. Anybody hiring?!", author_id: user1.id) 

post4 = Post.create!(body: "If you think you are too small to make a difference. 
Try sleeping with a mosquito.", author_id: user5.id) 

post5 = Post.create!(body: "What is your favorite language? Comment below.", author_id: user8.id) 

post6 = Post.create!(body: "Took a break from coding to watch my Kansas City Chiefs. 
Much needed break to reset mentally.", author_id: user2.id) 

post7 = Post.create!(body: "Mental health >>> money", author_id: user7.id) 

post8 = Post.create!(body: "Happy to announce that I accepted a software engineering position 
at Your Company!", author_id: user3.id) 

post9 = Post.create!(body: "Software engineering is the only profession 
where it is ok to copy other people's work.", author_id: user1.id) 

post10 = Post.create!(body: "Delete this comment to test function! Don't be shy! Left it here 
just for you!", author_id: user1.id)

post11 = Post.create!(body: "Edit this comment to test function! Come on, you know you want 
to!", author_id: user1.id)

post12 = Post.create!(body: "The best way to predict the future is to create it.", author_id: user2.id)

# comments for seeding db
comment1 = Comment.create!(user_id: user1.id, post_id: post1.id, post_author_id: user6.id, body: "True story")

comment1 = Comment.create!(user_id: user1.id, post_id: post1.id, post_author_id: user6.id, body: "Magic only exists in the movies")

comment2 = Comment.create!(user_id: user6.id, post_id: post1.id, post_author_id: user6.id, body: "Preach")

comment3 = Comment.create!(user_id: user8.id, post_id: post2.id, post_author_id: user4.id, body: "I just need help 
with my resume.")

comment4 = Comment.create!(user_id: user7.id, post_id: post2.id, post_author_id: user4.id, body: "Can someone take a 
look at my profile?")

comment5 = Comment.create!(user_id: user5.id, post_id: post3.id, post_author_id: user1.id, body: "Everything happens 
for a reason. Hopefully, everything turns out ok.")

comment6 = Comment.create!(user_id: user4.id, post_id: post3.id, post_author_id: user1.id, body: "I am sorry to hear 
that. It does say a lot that you decided to learn some new skills.")

comment7 = Comment.create!(user_id: user3.id, post_id: post3.id, post_author_id: user1.id, body: "Someone get this man 
a job. ASAP")

comment8 = Comment.create!(user_id: user7.id, post_id: post4.id, post_author_id: user5.id, body: "It's the worst thing 
to be around you when you are trying to sleep. haha")

comment9 = Comment.create!(user_id: user8.id, post_id: post4.id, post_author_id: user5.id, body: "This is too funny!")

comment10 = Comment.create!(user_id: user4.id, post_id: post5.id, post_author_id: user8.id, body: "React")

comment11 = Comment.create!(user_id: user5.id, post_id: post5.id, post_author_id: user8.id, body: "JavaScript")

comment12 = Comment.create!(user_id: user6.id, post_id: post5.id, post_author_id: user8.id, body: "Spanish")

comment13 = Comment.create!(user_id: user1.id, post_id: post5.id, post_author_id: user8.id, body: "SQL")

comment14 = Comment.create!(user_id: user1.id, post_id: post6.id, post_author_id: user2.id, body: "Chiefs are playing 
well right now!")

comment15 = Comment.create!(user_id: user6.id, post_id: post7.id, post_author_id: user7.id, body: "How much money are 
talking about?!")

comment16 = Comment.create!(user_id: user1.id, post_id: post8.id, post_author_id: user3.id, body: "Go ahead and delete 
this comment for testing. Don't be shy!")

comment17 = Comment.create!(user_id: user1.id, post_id: post8.id, post_author_id: user3.id, body: "Much deserved! 
Congratulations!")

comment18 = Comment.create!(user_id: user1.id, post_id: post9.id, post_author_id: user1.id, body: "Edit this comment 
for testing. Give it try!")

comment19 = Comment.create!(user_id: user1.id, post_id: post9.id, post_author_id: user1.id, body: "Giving you another
comment to edit. Your welcome!")

comment20 = Comment.create!(user_id: user2.id, post_id: post12.id, post_author_id: user2.id, body: "Appreciate you taking 
the time to look at my project. Hope you have a great day.")

comment21 = Comment.create!(user_id: user2.id, post_id: post12.id, post_author_id: user2.id, body: "Feel free to like any 
of the posts. It's not going to break anything. If it does. Let me know so I can fix it!")

# likes for seeding database
like1 = Like.create!(user_id: user3.id, post_id: post1.id)

like2 = Like.create!(user_id: user4.id, post_id: post1.id)

like3 = Like.create!(user_id: user5.id, post_id: post2.id)

like4 = Like.create!(user_id: user1.id, post_id: post3.id)

like5 = Like.create!(user_id: user5.id, post_id: post4.id)

like6 = Like.create!(user_id: user3.id, post_id: post4.id)

like7 = Like.create!(user_id: user2.id, post_id: post4.id)

like8 = Like.create!(user_id: user2.id, post_id: post6.id)

like9 = Like.create!(user_id: user1.id, post_id: post6.id)

like10 = Like.create!(user_id: user1.id, post_id: post7.id)

like11 = Like.create!(user_id: user4.id, post_id: post8.id)

like12 = Like.create!(user_id: user2.id, post_id: post8.id)

like13 = Like.create!(user_id: user8.id, post_id: post8.id)

like14 = Like.create!(user_id: user5.id, post_id: post9.id)

like15 = Like.create!(user_id: user7.id, post_id: post9.id)

like16 = Like.create!(user_id: user6.id, post_id: post9.id)

like17 = Like.create!(user_id: user4.id, post_id: post9.id)

like18 = Like.create!(user_id: user1.id, post_id: post12.id)

like19 = Like.create!(user_id: user2.id, post_id: post12.id)

like20 = Like.create!(user_id: user3.id, post_id: post12.id)

like21 = Like.create!(user_id: user4.id, post_id: post12.id)

like22 = Like.create!(user_id: user5.id, post_id: post12.id)

like23 = Like.create!(user_id: user6.id, post_id: post12.id)

like24 = Like.create!(user_id: user7.id, post_id: post12.id)

like25 = Like.create!(user_id: user8.id, post_id: post12.id)