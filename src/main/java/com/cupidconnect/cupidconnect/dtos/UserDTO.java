package com.cupidconnect.cupidconnect.dtos;

import com.cupidconnect.cupidconnect.models.GenderEntity;
import com.cupidconnect.cupidconnect.models.InterestGenderEntity;
import com.cupidconnect.cupidconnect.models.ProfileEntity;
import com.cupidconnect.cupidconnect.models.RoleEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Integer id;

    @NotNull(message = "First name is required !")
    private String firstName;

    @NotNull(message = "Last name is required !")
    private String lastName;

    @NotNull(message = "Nickname is required !")
    private String nickname;

    @NotNull(message = "Password is required !")
//    @JsonIgnore // Lỗi: ko đc trả về password nhưng đồng thời phải nhận giá trị password
    private String password;

    @NotNull(message = "Gender_id is required !")
    private GenderDTO genderDTO; // Foreign key 'gender_id'
    // bởi vì bảng genders đc tạo sẵn trong DB nên ko cần truyền Object vào, chỉ
    // cần id của gender đc tạo sẵn là đc

    @NotNull(message = "Status_id is required !")
    private StatusDTO statusDTO;

    @NotNull(message = "Email is required !")
    @Email
    private String email;

    @NotNull(message = "Phone is required !")
    private String phone;

    @NotNull(message = "City is required !")
    private String city;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dob;

    private Integer fbAccountId;

    private Integer googleAccountId;

    @NotNull(message = "Confirmation code is required !")
    private String confirmationCode;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date confirmationTime;

    private BigDecimal popularity;

    private Integer isActive;

//    @NotNull(message = "Create_at is required !") -> Not null khi lưu trong DB, ko phải gửi lên
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date createdAt;

//    @NotNull(message = "Updated_at is required !") -> Not null khi lưu trong DB, ko phải gửi lên
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

    private Integer isAdmin;

//    @NotNull(message = "Role_id is required !") -> Not null khi lưu trong DB, ko phải gửi lên
    private RoleDTO roleDTO; // Foreign key 'role_id'
    
    private ProfileDTO profileDTO; // Foreign key 'profile_id'

    private List<InterestGenderDTO> interestGenders;


    public UserDTO(Integer id, String firstName, String lastName, String nickname, String password, GenderDTO genderDTO,
                   StatusDTO statusDTO, String email, String phone, String city, Date dob, Integer fbAccountId,
                   Integer googleAccountId, String confirmationCode, Date confirmationTime, BigDecimal popularity,
                   Integer isActive, Date createdAt, Date updatedAt, Integer isAdmin, RoleDTO roleDTO,
                   ProfileDTO profileDTO) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.password = password;
        this.genderDTO = genderDTO;
        this.statusDTO = statusDTO;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.dob = dob;
        this.fbAccountId = fbAccountId;
        this.googleAccountId = googleAccountId;
        this.confirmationCode = confirmationCode;
        this.confirmationTime = confirmationTime;
        this.popularity = popularity;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isAdmin = isAdmin;
        this.roleDTO = roleDTO;
        this.profileDTO = profileDTO;
    }

    public UserDTO(String firstName, String lastName, String nickname, String password, GenderDTO genderDTO,
                   StatusDTO statusDTO, String email, String phone, String city, Date dob, Integer fbAccountId,
                   Integer googleAccountId, String confirmationCode, Date confirmationTime, BigDecimal popularity,
                   Integer isActive, Date createdAt, Date updatedAt, Integer isAdmin, RoleDTO roleDTO,
                   ProfileDTO profileDTO, List<InterestGenderDTO> interestGenders) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.password = password;
        this.genderDTO = genderDTO;
        this.statusDTO = statusDTO;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.dob = dob;
        this.fbAccountId = fbAccountId;
        this.googleAccountId = googleAccountId;
        this.confirmationCode = confirmationCode;
        this.confirmationTime = confirmationTime;
        this.popularity = popularity;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isAdmin = isAdmin;
        this.roleDTO = roleDTO;
        this.profileDTO = profileDTO;
        this.interestGenders = interestGenders;
    }

    public UserDTO(String firstName, String lastName, String nickname, String password, GenderDTO genderDTO,
                   StatusDTO statusDTO, String email, String phone, String city, Date dob, Integer fbAccountId,
                   Integer googleAccountId, String confirmationCode, Date confirmationTime, BigDecimal popularity,
                   Integer isActive, Date createdAt, Date updatedAt, Integer isAdmin, RoleDTO roleDTO,
                   ProfileDTO profileDTO) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.password = password;
        this.genderDTO = genderDTO;
        this.statusDTO = statusDTO;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.dob = dob;
        this.fbAccountId = fbAccountId;
        this.googleAccountId = googleAccountId;
        this.confirmationCode = confirmationCode;
        this.confirmationTime = confirmationTime;
        this.popularity = popularity;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.isAdmin = isAdmin;
        this.roleDTO = roleDTO;
        this.profileDTO = profileDTO;
    }
}
