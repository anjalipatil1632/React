create database testdb

use testdb

create table tutorials (id int identity(1,1),title nvarchar null,description nvarchar null,published BIT,createdAt Datetime,updatedAt Datetime)

select * from tutorials

truncate table tutorials

ALTER TABLE tutorials
ALTER COLUMN description nvarchar(500) 

insert into tutorials values('.NET Visual Studio-For beginners 2000','C++-For beginners 2000.Best book for beginners to learnv node js reactC++ .NET Visual Studio','false',GETDATE(),GETDATE())

-----------------------------------------------------------------------STORED PROCEDURE--------------------------------------------------------------------------------------------

create proc sp_tutorials
as
begin
	select * from tutorials
end

exec  sp_tutorials

create proc sp_tutorials_id
@id int
as
begin
	select * from tutorials where id=@id;
end

exec sp_tutorials_id 1

create proc sp_tutorials_post
@title nvarchar(500),
@discription nvarchar(500) null
as
begin
	insert into tutorials(title,description ,createdAt ,updatedAt ) values(@title,@discription,GETDATE(),GETDATE());
end

create proc sp_tutorials_put
@id int,
@title nvarchar(500) null,
@description nvarchar(500)null,
@published Bit null
as
begin
	
	update tutorials set title=@title,description=@description,published=@published,updatedAt=GETDATE() where id=@id;
end

exec sp_tutorials_put 5,'New Book',null,null

create proc sp_tutorials_delete
@id int
as
begin
	delete from tutorials where id=@id;
end


create proc sp_tutorials_deleteall
as
begin
	truncate table tutorials;
end



