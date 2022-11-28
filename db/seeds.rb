=begin # require 'faker'
puts "🌱 Seeding spices..."

# Seed your database here
Employee.all.each {|e| e.delete}
Customer.all.each {|e| e.delete}
Project.all.each {|e| e.delete}
Task.all.each {|e| e.delete}


10.times do 



    Employee.create(
    name: Faker::FunnyName.name,
    title: Faker::Military.dod_paygrade  

    )

end

100.times do 


        Customer.create(
        name: Faker::Company.name,
        address: Faker::Address.street_address     
    
        )

end

300.times do

        Project.create(
        open: [true,false].sample,
        description: Faker::Job.key_skill ,
        estimated_total_hours: rand(50..200),
        customer_id: rand(1..100)

        )
end

1000.times do

    Task.create(
        hours: rand(1..8),
        description: Faker::Hobby.activity,
        employee_id: rand(1..10),
        project_id: rand(1..300)      
    )

end



puts "✅ Done seeding!"

=end