-- Applied on staging and production on 2026-08-19.
-- The column should have been called contact_email. It is not.
-- Correcting this file is planted mistake 2: the fix is a new migration.
ALTER TABLE tasks ADD COLUMN contactemail TEXT;
