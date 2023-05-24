package main

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type StudentJob struct {
	ID         int    `json:"id"`
	Title      string `json:"title"`
	Location   string `json:"location"`
	IsPaid     bool   `json:"isPaid"`
	DatePosted string `json:"datePosted"`
}

func main() {
	db, err := sql.Open("postgres", "postgres://postgres:admin@localhost:5432/job?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	router := gin.Default()
	router.Use(cors.Default())

	router.GET("/student-jobs", func(c *gin.Context) {
		rows, err := db.Query("SELECT * FROM student_jobs")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer rows.Close()

		var studentJobs []StudentJob

		for rows.Next() {
			var studentJob StudentJob
			err := rows.Scan(&studentJob.ID, &studentJob.Title, &studentJob.Location, &studentJob.IsPaid, &studentJob.DatePosted)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			studentJobs = append(studentJobs, studentJob)
		}

		c.JSON(http.StatusOK, studentJobs)
	})

	router.Run(":8080")
}
